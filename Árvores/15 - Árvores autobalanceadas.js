class Node {
    constructor(key) {
      this.key = key;
      this.left = null;
      this.right = null;
      this.height = 1; // Altura inicial
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
  
    // Rotação simples à direita
    rotateRight(y) {
      let x = y.left;
      let T2 = x.right;
  
      // Realiza rotação
      x.right = y;
      y.left = T2;
  
      // Atualiza alturas
      y.height = Math.max(this.getHeight(y.left), this.getHeight(y.right)) + 1;
      x.height = Math.max(this.getHeight(x.left), this.getHeight(x.right)) + 1;
  
      return x;
    }
  
    // Rotação simples à esquerda
    rotateLeft(x) {
      let y = x.right;
      let T2 = y.left;
  
      // Realiza rotação
      y.left = x;
      x.right = T2;
  
      // Atualiza alturas
      x.height = Math.max(this.getHeight(x.left), this.getHeight(x.right)) + 1;
      y.height = Math.max(this.getHeight(y.left), this.getHeight(y.right)) + 1;
  
      return y;
    }
  
    // Método para inserir um nó na AVL
    insert(node, key) {
      if (!node) return new Node(key);
  
      if (key < node.key) {
        node.left = this.insert(node.left, key);
      } else if (key > node.key) {
        node.right = this.insert(node.right, key);
      } else {
        return node; // Duplicatas não são permitidas
      }
  
      // Atualiza altura do nó atual
      node.height = Math.max(this.getHeight(node.left), this.getHeight(node.right)) + 1;
  
      // Obtém o fator de balanceamento para verificar se o nó está desbalanceado
      let balance = this.getBalanceFactor(node);
  
      // Caso 1: Rotação à direita
      if (balance > 1 && key < node.left.key) {
        return this.rotateRight(node);
      }
  
      // Caso 2: Rotação à esquerda
      if (balance < -1 && key > node.right.key) {
        return this.rotateLeft(node);
      }
  
      // Caso 3: Rotação dupla (esquerda-direita)
      if (balance > 1 && key > node.left.key) {
        node.left = this.rotateLeft(node.left);
        return this.rotateRight(node);
      }
  
      // Caso 4: Rotação dupla (direita-esquerda)
      if (balance < -1 && key < node.right.key) {
        node.right = this.rotateRight(node.right);
        return this.rotateLeft(node);
      }
  
      return node;
    }
  
    // Método público para inserir na árvore
    add(key) {
      this.root = this.insert(this.root, key);
    }
  
    // Percurso em ordem para exibir os nós
    inOrderTraversal(node = this.root, result = []) {
      if (node) {
        this.inOrderTraversal(node.left, result);
        result.push(node.key);
        this.inOrderTraversal(node.right, result);
      }
      return result;
    }
  }
  
  // EXEMPLO DE USO
  const avl = new AVLTree();
  avl.add(10);
  avl.add(20);
  avl.add(30); // Rotação necessária
  avl.add(40);
  avl.add(50);
  avl.add(25); // Rotação dupla necessária
  
  console.log("Percurso em ordem:", avl.inOrderTraversal()); // [10, 20, 25, 30, 40, 50]
  