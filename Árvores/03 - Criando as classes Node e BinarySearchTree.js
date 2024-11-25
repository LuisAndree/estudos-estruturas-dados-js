// Classe Node: Representa um nó na árvore
class Node {
    constructor(value) {
      this.value = value; // Valor armazenado no nó
      this.left = null;   // Referência para o filho à esquerda
      this.right = null;  // Referência para o filho à direita
    }
  }
  
  // Classe BinarySearchTree: Representa uma árvore binária de busca
  class BinarySearchTree {
    constructor() {
      this.root = null; // Raiz da árvore
    }
  
    // Método para inserir um valor na árvore
    insert(value) {
      const newNode = new Node(value);
      if (!this.root) {
        this.root = newNode; // Se a árvore está vazia, define a raiz
        return;
      }
  
      let current = this.root;
      while (true) {
        if (value < current.value) {
          if (!current.left) {
            current.left = newNode; // Insere como filho à esquerda
            return;
          }
          current = current.left;
        } else {
          if (!current.right) {
            current.right = newNode; // Insere como filho à direita
            return;
          }
          current = current.right;
        }
      }
    }
  
    // Método para buscar um valor na árvore
    search(value) {
      let current = this.root;
      while (current) {
        if (value === current.value) return true; // Valor encontrado
        current = value < current.value ? current.left : current.right;
      }
      return false; // Valor não encontrado
    }
  
    // Método para percorrer a árvore em ordem (in-order)
    inOrderTraversal(node = this.root, result = []) {
      if (node) {
        this.inOrderTraversal(node.left, result); // Subárvore esquerda
        result.push(node.value);                 // Visita o nó
        this.inOrderTraversal(node.right, result); // Subárvore direita
      }
      return result;
    }
  
    // Método para percorrer a árvore em pré-ordem (pre-order)
    preOrderTraversal(node = this.root, result = []) {
      if (node) {
        result.push(node.value);                 // Visita o nó
        this.preOrderTraversal(node.left, result); // Subárvore esquerda
        this.preOrderTraversal(node.right, result); // Subárvore direita
      }
      return result;
    }
  
    // Método para percorrer a árvore em pós-ordem (post-order)
    postOrderTraversal(node = this.root, result = []) {
      if (node) {
        this.postOrderTraversal(node.left, result); // Subárvore esquerda
        this.postOrderTraversal(node.right, result); // Subárvore direita
        result.push(node.value);                 // Visita o nó
      }
      return result;
    }
  }
  
  // EXEMPLOS DE USO
  
  const bst = new BinarySearchTree();
  bst.insert(10);
  bst.insert(5);
  bst.insert(15);
  bst.insert(3);
  bst.insert(7);
  bst.insert(13);
  bst.insert(17);
  
  console.log("Travessia em Ordem (In-Order):", bst.inOrderTraversal()); // [3, 5, 7, 10, 13, 15, 17]
  console.log("Travessia em Pré-Ordem (Pre-Order):", bst.preOrderTraversal()); // [10, 5, 3, 7, 15, 13, 17]
  console.log("Travessia em Pós-Ordem (Post-Order):", bst.postOrderTraversal()); // [3, 7, 5, 13, 17, 15, 10]
  console.log("Busca pelo valor 7:", bst.search(7)); // true
  console.log("Busca pelo valor 20:", bst.search(20)); // false
  