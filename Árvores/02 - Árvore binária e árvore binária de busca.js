// Classe para um nó da árvore binária
class TreeNode {
    constructor(value) {
      this.value = value; // Valor do nó
      this.left = null; // Referência para o filho à esquerda
      this.right = null; // Referência para o filho à direita
    }
  }
  
  // Classe para uma Árvore Binária
  class BinaryTree {
    constructor() {
      this.root = null; // Raiz da árvore
    }
  
    // Adiciona nós em nível para uma Árvore Binária genérica (exemplo simples)
    add(value) {
      const newNode = new TreeNode(value);
      if (!this.root) {
        this.root = newNode;
        return;
      }
  
      const queue = [this.root];
      while (queue.length) {
        const current = queue.shift();
        if (!current.left) {
          current.left = newNode;
          return;
        } else if (!current.right) {
          current.right = newNode;
          return;
        } else {
          queue.push(current.left, current.right);
        }
      }
    }
  
    // Travessia em Ordem Pré (Pre-order)
    preOrderTraversal(node = this.root, result = []) {
      if (node) {
        result.push(node.value); // Visita o nó
        this.preOrderTraversal(node.left, result); // Visita a subárvore esquerda
        this.preOrderTraversal(node.right, result); // Visita a subárvore direita
      }
      return result;
    }
  }
  
  // Classe para uma Árvore Binária de Busca (BST)
  class BinarySearchTree {
    constructor() {
      this.root = null; // Raiz da árvore
    }
  
    // Insere um valor na árvore
    insert(value) {
      const newNode = new TreeNode(value);
      if (!this.root) {
        this.root = newNode;
        return;
      }
  
      let current = this.root;
      while (true) {
        if (value < current.value) {
          if (!current.left) {
            current.left = newNode;
            return;
          }
          current = current.left;
        } else {
          if (!current.right) {
            current.right = newNode;
            return;
          }
          current = current.right;
        }
      }
    }
  
    // Busca um valor na árvore
    search(value) {
      let current = this.root;
      while (current) {
        if (value === current.value) return true; // Valor encontrado
        current = value < current.value ? current.left : current.right;
      }
      return false; // Valor não encontrado
    }
  
    // Travessia em Ordem (In-order)
    inOrderTraversal(node = this.root, result = []) {
      if (node) {
        this.inOrderTraversal(node.left, result); // Visita a subárvore esquerda
        result.push(node.value); // Visita o nó
        this.inOrderTraversal(node.right, result); // Visita a subárvore direita
      }
      return result;
    }
  }
  
  // EXEMPLOS DE USO
  
  // Árvore Binária Genérica
  const binaryTree = new BinaryTree();
  binaryTree.add(1);
  binaryTree.add(2);
  binaryTree.add(3);
  binaryTree.add(4);
  binaryTree.add(5);
  console.log("Travessia Pré-Ordem da Árvore Binária:", binaryTree.preOrderTraversal()); // [1, 2, 4, 5, 3]
  
  // Árvore Binária de Busca (BST)
  const bst = new BinarySearchTree();
  bst.insert(10);
  bst.insert(5);
  bst.insert(15);
  bst.insert(3);
  bst.insert(7);
  bst.insert(13);
  bst.insert(17);
  
  console.log("Travessia Em-Ordem da BST:", bst.inOrderTraversal()); // [3, 5, 7, 10, 13, 15, 17]
  console.log("Busca 7 na BST:", bst.search(7)); // true
  console.log("Busca 20 na BST:", bst.search(20)); // false
  