class Node {
    constructor(key) {
      this.key = key;
      this.left = null;
      this.right = null;
      this.height = 1; // Altura inicial do nó
    }
  }
  
  class AVLTree {
    constructor() {
      this.root = null;
    }
  
    // Método para obter a altura de um nó
    getHeight(node) {
      return node ? node.height : 0;
    }
  
    // Método para calcular o fator de balanceamento
    getBalanceFactor(node) {
      return node ? this.getHeight(node.left) - this.getHeight(node.right) : 0;
    }
  
    // Atualiza a altura de um nó
    updateHeight(node) {
      if (node) {
        node.height = Math.max(this.getHeight(node.left), this.getHeight(node.right)) + 1;
      }
    }
  
    // Rotação Simples à Direita (LL)
    rotateRight(y) {
      let x = y.left;
      let T2 = x.right;
  
      x.right = y;
      y.left = T2;
  
      this.updateHeight(y);
      this.updateHeight(x);
  
      return x;
    }
  
    // Rotação Simples à Esquerda (RR)
    rotateLeft(x) {
      let y = x.right;
      let T2 = y.left;
  
      y.left = x;
      x.right = T2;
  
      this.updateHeight(x);
      this.updateHeight(y);
  
      return y;
    }
  
    // Rotação Dupla à Direita (LR)
    rotateLeftRight(node) {
      node.left = this.rotateLeft(node.left);
      return this.rotateRight(node);
    }
  
    // Rotação Dupla à Esquerda (RL)
    rotateRightLeft(node) {
      node.right = this.rotateRight(node.right);
      return this.rotateLeft(node);
    }
  
    // Inserção com balanceamento
    insert(node, key) {
      if (!node) return new Node(key);
  
      if (key < node.key) {
        node.left = this.insert(node.left, key);
      } else if (key > node.key) {
        node.right = this.insert(node.right, key);
      } else {
        return node; // Chave duplicada
      }
  
      this.updateHeight(node);
  
      let balance = this.getBalanceFactor(node);
  
      if (balance > 1 && key < node.left.key) {
        return this.rotateRight(node); // LL
      }
  
      if (balance < -1 && key > node.right.key) {
        return this.rotateLeft(node); // RR
      }
  
      if (balance > 1 && key > node.left.key) {
        return this.rotateLeftRight(node); // LR
      }
  
      if (balance < -1 && key < node.right.key) {
        return this.rotateRightLeft(node); // RL
      }
  
      return node;
    }
  
    // Método público para adicionar uma chave
    add(key) {
      this.root = this.insert(this.root, key);
    }
  
    // Método para encontrar o valor mínimo em uma subárvore
    findMin(node) {
      while (node.left) {
        node = node.left;
      }
      return node;
    }
  
    // Remoção com balanceamento
    removeNode(node, key) {
      if (!node) return null;
  
      if (key < node.key) {
        node.left = this.removeNode(node.left, key);
      } else if (key > node.key) {
        node.right = this.removeNode(node.right, key);
      } else {
        // Nó encontrado: três casos
        if (!node.left || !node.right) {
          node = node.left || node.right;
        } else {
          let minLargerNode = this.findMin(node.right);
          node.key = minLargerNode.key;
          node.right = this.removeNode(node.right, minLargerNode.key);
        }
      }
  
      if (!node) return node;
  
      this.updateHeight(node);
  
      let balance = this.getBalanceFactor(node);
  
      if (balance > 1 && this.getBalanceFactor(node.left) >= 0) {
        return this.rotateRight(node); // LL
      }
  
      if (balance > 1 && this.getBalanceFactor(node.left) < 0) {
        return this.rotateLeftRight(node); // LR
      }
  
      if (balance < -1 && this.getBalanceFactor(node.right) <= 0) {
        return this.rotateLeft(node); // RR
      }
  
      if (balance < -1 && this.getBalanceFactor(node.right) > 0) {
        return this.rotateRightLeft(node); // RL
      }
  
      return node;
    }
  
    // Método público para remover uma chave
    remove(key) {
      this.root = this.removeNode(this.root, key);
    }
  
    // Percurso em ordem (in-order traversal)
    inOrderTraversal(node = this.root, result = []) {
      if (node) {
        this.inOrderTraversal(node.left, result);
        result.push(node.key);
        this.inOrderTraversal(node.right, result);
      }
      return result;
    }
  }
  
  // Exemplo de uso:
  const avl = new AVLTree();
  avl.add(30);
  avl.add(20);
  avl.add(40);
  avl.add(10);
  avl.add(25);
  avl.add(35);
  avl.add(50);
  
  console.log("Percurso em ordem antes da remoção:", avl.inOrderTraversal());
  
  avl.remove(20); // Remover um nó com dois filhos
  console.log("Percurso em ordem após remover 20:", avl.inOrderTraversal());
  