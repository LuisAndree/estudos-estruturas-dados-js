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
  
    // Exemplo de inserção mantendo balanceamento (simplificado)
    insert(node, key) {
      if (!node) return new Node(key);
  
      if (key < node.key) {
        node.left = this.insert(node.left, key);
      } else if (key > node.key) {
        node.right = this.insert(node.right, key);
      } else {
        return node; // Chave duplicada
      }
  
      // Atualiza a altura do nó atual
      this.updateHeight(node);
  
      // Calcula o fator de balanceamento
      let balance = this.getBalanceFactor(node);
  
      // Balanceamento
      if (balance > 1 && key < node.left.key) {
        return this.rotateRight(node); // Rotação simples à direita
      }
  
      if (balance < -1 && key > node.right.key) {
        return this.rotateLeft(node); // Rotação simples à esquerda
      }
  
      if (balance > 1 && key > node.left.key) {
        node.left = this.rotateLeft(node.left);
        return this.rotateRight(node); // Rotação dupla
      }
  
      if (balance < -1 && key < node.right.key) {
        node.right = this.rotateRight(node.right);
        return this.rotateLeft(node); // Rotação dupla
      }
  
      return node;
    }
  
    // Rotação simples à esquerda
    rotateLeft(x) {
      let y = x.right;
      let T2 = y.left;
  
      y.left = x;
      x.right = T2;
  
      this.updateHeight(x);
      this.updateHeight(y);
  
      return y;
    }
  
    // Rotação simples à direita
    rotateRight(y) {
      let x = y.left;
      let T2 = x.right;
  
      x.right = y;
      y.left = T2;
  
      this.updateHeight(y);
      this.updateHeight(x);
  
      return x;
    }
  }
  