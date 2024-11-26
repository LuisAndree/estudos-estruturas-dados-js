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
  
    // Método para encontrar o valor mínimo na árvore
    findMin(node = this.root) {
      if (!node) return null; // Árvore vazia
      while (node.left) {
        node = node.left; // Continua indo para a subárvore esquerda
      }
      return node.key; // O nó mais à esquerda tem o menor valor
    }
  
    // Método para encontrar o valor máximo na árvore
    findMax(node = this.root) {
      if (!node) return null; // Árvore vazia
      while (node.right) {
        node = node.right; // Continua indo para a subárvore direita
      }
      return node.key; // O nó mais à direita tem o maior valor
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
  
  console.log("Valor Mínimo:", bst.findMin()); // 3
  console.log("Valor Máximo:", bst.findMax()); // 17
  