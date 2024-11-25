// Classe Node: Representa um nó da árvore
class Node {
    constructor(key) {
      this.key = key; // Chave armazenada no nó
      this.left = null; // Referência para o filho à esquerda
      this.right = null; // Referência para o filho à direita
    }
  }
  
  // Classe BinarySearchTree: Representa a Árvore Binária de Busca
  class BinarySearchTree {
    constructor() {
      this.root = null; // Raiz da árvore
    }
  
    // Método para inserir uma chave na árvore
    insert(key) {
      const newNode = new Node(key);
      if (!this.root) {
        this.root = newNode; // Define a raiz se a árvore estiver vazia
        return;
      }
  
      let current = this.root;
      while (true) {
        if (key < current.key) {
          if (!current.left) {
            current.left = newNode; // Insere à esquerda
            return;
          }
          current = current.left;
        } else {
          if (!current.right) {
            current.right = newNode; // Insere à direita
            return;
          }
          current = current.right;
        }
      }
    }
  
    // Travessia em Ordem (In-Order): Esquerda -> Nó -> Direita
    inOrderTraversal(node = this.root, result = []) {
      if (node) {
        this.inOrderTraversal(node.left, result); // Subárvore esquerda
        result.push(node.key); // Visita o nó
        this.inOrderTraversal(node.right, result); // Subárvore direita
      }
      return result;
    }
  
    // Travessia em Pré-Ordem (Pre-Order): Nó -> Esquerda -> Direita
    preOrderTraversal(node = this.root, result = []) {
      if (node) {
        result.push(node.key); // Visita o nó
        this.preOrderTraversal(node.left, result); // Subárvore esquerda
        this.preOrderTraversal(node.right, result); // Subárvore direita
      }
      return result;
    }
  
    // Travessia em Pós-Ordem (Post-Order): Esquerda -> Direita -> Nó
    postOrderTraversal(node = this.root, result = []) {
      if (node) {
        this.postOrderTraversal(node.left, result); // Subárvore esquerda
        this.postOrderTraversal(node.right, result); // Subárvore direita
        result.push(node.key); // Visita o nó
      }
      return result;
    }
  }
  
  // EXEMPLO DE USO
  
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
  