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
  
    // Método para remover um nó da árvore
    remove(key) {
      this.root = this._removeNode(this.root, key);
    }
  
    // Função auxiliar recursiva para remover um nó
    _removeNode(node, key) {
      if (!node) return null; // Nó não encontrado
  
      if (key < node.key) {
        node.left = this._removeNode(node.left, key); // Busca na subárvore esquerda
        return node;
      } else if (key > node.key) {
        node.right = this._removeNode(node.right, key); // Busca na subárvore direita
        return node;
      } else {
        // Nó encontrado
        if (!node.left && !node.right) {
          // Caso 1: Nó sem filhos (folha)
          return null;
        }
  
        if (!node.left) {
          // Caso 2: Nó com um filho à direita
          return node.right;
        }
  
        if (!node.right) {
          // Caso 3: Nó com um filho à esquerda
          return node.left;
        }
  
        // Caso 4: Nó com dois filhos (não abordado aqui, mas requer lógica adicional)
      }
    }
  
    // Método para percorrer a árvore em ordem e mostrar os valores
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
  
  const bst = new BinarySearchTree();
  bst.insert(10);
  bst.insert(5);
  bst.insert(15);
  bst.insert(3);
  bst.insert(7);  // Nó com filho à esquerda
  bst.insert(13);
  bst.insert(17); // Nó com filho à direita
  bst.insert(12);
  
  console.log("Árvore antes de remover nós:", bst.inOrderTraversal()); // [3, 5, 7, 10, 12, 13, 15, 17]
  
  bst.remove(7);  // Remove nó com um filho à esquerda
  bst.remove(17); // Remove nó com um filho à direita
  
  console.log("Árvore após remover nós:", bst.inOrderTraversal()); // [3, 5, 10, 12, 13, 15]
  