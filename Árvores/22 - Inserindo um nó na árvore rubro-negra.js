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

    // Encontrar a posição correta para o novo nó
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
      this.root = node; // Novo nó é a raiz
    } else if (node.key < parent.key) {
      parent.left = node;
    } else {
      parent.right = node;
    }

    this.fixInsert(node); // Ajusta as cores e balanceia a árvore
  }

  // Corrigir propriedades da árvore após inserção
  fixInsert(node) {
    while (node.parent && node.parent.isRed()) {
      if (node.parent === node.parent.parent.left) {
        let uncle = node.parent.parent.right;
        if (uncle.isRed()) {
          // Caso 1: O tio é vermelho
          node.parent.color = BLACK;
          uncle.color = BLACK;
          node.parent.parent.color = RED;
          node = node.parent.parent;
        } else {
          if (node === node.parent.right) {
            // Caso 2: O tio é preto e o nó é filho direito
            node = node.parent;
            this.rotateLeft(node);
          }
          // Caso 3: O tio é preto e o nó é filho esquerdo
          node.parent.color = BLACK;
          node.parent.parent.color = RED;
          this.rotateRight(node.parent.parent);
        }
      } else {
        let uncle = node.parent.parent.left;
        if (uncle.isRed()) {
          // Caso 1: O tio é vermelho
          node.parent.color = BLACK;
          uncle.color = BLACK;
          node.parent.parent.color = RED;
          node = node.parent.parent;
        } else {
          if (node === node.parent.left) {
            // Caso 2: O tio é preto e o nó é filho esquerdo
            node = node.parent;
            this.rotateRight(node);
          }
          // Caso 3: O tio é preto e o nó é filho direito
          node.parent.color = BLACK;
          node.parent.parent.color = RED;
          this.rotateLeft(node.parent.parent);
        }
      }
    }
    this.root.color = BLACK; // A raiz sempre deve ser preta
  }

  // Percurso em ordem (in-order traversal)
  inOrderTraversal(node = this.root, result = []) {
    if (node !== this.nil) {
      this.inOrderTraversal(node.left, result);
      result.push(node.key);
      this.inOrderTraversal(node.right, result);
    }
    return result;
  }
}

// Exemplo de uso:
const rbTree = new RedBlackTree();
rbTree.insert(10);
rbTree.insert(20);
rbTree.insert(30);
rbTree.insert(15);
rbTree.insert(25);

console.log("Percurso em ordem:", rbTree.inOrderTraversal()); // [10, 15, 20, 25, 30]
