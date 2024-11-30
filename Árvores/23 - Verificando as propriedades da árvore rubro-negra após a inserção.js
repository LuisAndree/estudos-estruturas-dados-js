const RED = true;
const BLACK = false;

class Node {
  constructor(key, color = RED, left = null, right = null, parent = null) {
    this.key = key;
    this.color = color;
    this.left = left;
    this.right = right;
    this.parent = parent;
  }

  isRed() {
    return this.color === RED;
  }

  isBlack() {
    return this.color === BLACK;
  }
}

class RedBlackTree {
  constructor() {
    this.nil = new Node(null, BLACK); // Nó NIL como sentinela
    this.root = this.nil;
  }

  // Rotação à esquerda
  rotateLeft(x) {
    let y = x.right;
    x.right = y.left;
    if (y.left !== this.nil) {
      y.left.parent = x;
    }
    y.parent = x.parent;
    if (x.parent === null) {
      this.root = y;
    } else if (x === x.parent.left) {
      x.parent.left = y;
    } else {
      x.parent.right = y;
    }
    y.left = x;
    x.parent = y;
  }

  // Rotação à direita
  rotateRight(x) {
    let y = x.left;
    x.left = y.right;
    if (y.right !== this.nil) {
      y.right.parent = x;
    }
    y.parent = x.parent;
    if (x.parent === null) {
      this.root = y;
    } else if (x === x.parent.right) {
      x.parent.right = y;
    } else {
      x.parent.left = y;
    }
    y.right = x;
    x.parent = y;
  }

  // Inserção de um nó na árvore
  insert(key) {
    let node = new Node(key, RED, this.nil, this.nil, null);
    let parent = null;
    let current = this.root;

    while (current !== this.nil) {
      parent = current;
      if (node.key < current.key) {
        current = current.left;
      } else {
        current = current.right;
      }
    }

    node.parent = parent;

    if (parent === null) {
      this.root = node;
    } else if (node.key < parent.key) {
      parent.left = node;
    } else {
      parent.right = node;
    }

    this.fixInsert(node);
  }

  // Corrigir propriedades da árvore após inserção
  fixInsert(node) {
    while (node.parent && node.parent.isRed()) {
      if (node.parent === node.parent.parent.left) {
        let uncle = node.parent.parent.right;
        if (uncle.isRed()) {
          node.parent.color = BLACK;
          uncle.color = BLACK;
          node.parent.parent.color = RED;
          node = node.parent.parent;
        } else {
          if (node === node.parent.right) {
            node = node.parent;
            this.rotateLeft(node);
          }
          node.parent.color = BLACK;
          node.parent.parent.color = RED;
          this.rotateRight(node.parent.parent);
        }
      } else {
        let uncle = node.parent.parent.left;
        if (uncle.isRed()) {
          node.parent.color = BLACK;
          uncle.color = BLACK;
          node.parent.parent.color = RED;
          node = node.parent.parent;
        } else {
          if (node === node.parent.left) {
            node = node.parent;
            this.rotateRight(node);
          }
          node.parent.color = BLACK;
          node.parent.parent.color = RED;
          this.rotateLeft(node.parent.parent);
        }
      }
    }
    this.root.color = BLACK;
  }

  // Função principal para verificar todas as propriedades
  validateProperties() {
    return (
      this.validateRootIsBlack() &&
      this.validateRedProperty(this.root) &&
      this.validateBlackProperty(this.root) &&
      this.validateBlackHeight(this.root)
    );
  }

  // Propriedade 2: Verifica se a raiz é preta
  validateRootIsBlack() {
    if (this.root.isBlack()) return true;
    console.error("Erro: A raiz não é preta.");
    return false;
  }

  // Propriedade 4: Verifica se nós vermelhos não têm filhos vermelhos
  validateRedProperty(node) {
    if (node === this.nil) return true;

    if (node.isRed()) {
      if (node.left.isRed() || node.right.isRed()) {
        console.error("Erro: Nó vermelho com filhos vermelhos em", node.key);
        return false;
      }
    }

    return (
      this.validateRedProperty(node.left) && this.validateRedProperty(node.right)
    );
  }

  // Propriedade 3: Verifica se todos os nós NIL são pretos
  validateBlackProperty(node) {
    if (node === this.nil) {
      if (node.isBlack()) return true;
      console.error("Erro: Nó folha não preto.");
      return false;
    }

    return (
      this.validateBlackProperty(node.left) &&
      this.validateBlackProperty(node.right)
    );
  }

  // Propriedade 5: Verifica a altura preta
  validateBlackHeight(node) {
    if (node === this.nil) return 1;

    const leftBlackHeight = this.validateBlackHeight(node.left);
    const rightBlackHeight = this.validateBlackHeight(node.right);

    if (leftBlackHeight !== rightBlackHeight) {
      console.error("Erro: Altura preta inconsistente.");
      return false;
    }

    return leftBlackHeight + (node.isBlack() ? 1 : 0);
  }
}

// Exemplo de uso:
const rbTree = new RedBlackTree();
rbTree.insert(10);
rbTree.insert(20);
rbTree.insert(30);

console.log("Propriedades válidas:", rbTree.validateProperties()); // true ou mensagens de erro
