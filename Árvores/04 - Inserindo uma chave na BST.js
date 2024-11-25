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
  
    // Método para visualizar a árvore em ordem (In-order)
    inOrderTraversal(node = this.root, result = []) {
      if (node) {
        this.inOrderTraversal(node.left, result); // Subárvore esquerda
        result.push(node.key); // Visita o nó
        this.inOrderTraversal(node.right, result); // Subárvore direita
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
  