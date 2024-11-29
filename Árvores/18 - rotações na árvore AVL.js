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
  
      // Realiza a rotação
      x.right = y;
      y.left = T2;
  
      // Atualiza as alturas
      this.updateHeight(y);
      this.updateHeight(x);
  
      return x;
    }
  
    // Rotação Simples à Esquerda (RR)
    rotateLeft(x) {
      let y = x.right;
      let T2 = y.left;
  
      // Realiza a rotação
      y.left = x;
      x.right = T2;
  
      // Atualiza as alturas
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
  
      // Atualiza a altura do nó atual
      this.updateHeight(node);
  
      // Calcula o fator de balanceamento
      let balance = this.getBalanceFactor(node);
  
      // Casos de rotação
      if (balance > 1 && key < node.left.key) {
        return this.rotateRight(node); // Rotação LL
      }
  
      if (balance < -1 && key > node.right.key) {
        return this.rotateLeft(node); // Rotação RR
      }
  
      if (balance > 1 && key > node.left.key) {
        return this.rotateLeftRight(node); // Rotação LR
      }
  
      if (balance < -1 && key < node.right.key) {
        return this.rotateRightLeft(node); // Rotação RL
      }
  
      return node;
    }
  
    // Método público para adicionar uma chave
    add(key) {
      this.root = this.insert(this.root, key);
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
  avl.add(10); // Rotação LL
  avl.add(25); // Rotação LR
  
  console.log("Percurso em ordem:", avl.inOrderTraversal()); // [10, 20, 25, 30, 40]
  