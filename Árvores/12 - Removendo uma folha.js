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
  
    // Método para remover uma folha da árvore
    removeLeaf(key) {
      this.root = this._removeNode(this.root, key);
    }
  
    // Função auxiliar recursiva para remover um nó (folha)
    _removeNode(node, key) {
      if (!node) return null; // Nó não encontrado
  
      if (key < node.key) {
        node.left = this._removeNode(node.left, key); // Subárvore esquerda
        return node;
      } else if (key > node.key) {
        node.right = this._removeNode(node.right, key); // Subárvore direita
        return node;
      } else {
        // Nó encontrado
        if (!node.left && !node.right) {
          // Caso 1: Nó é uma folha (sem filhos)
          return null; // Remove o nó
        }
        return node; // Retorna o nó sem modificações se não for uma folha
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
  bst.insert(3);  // Folha
  bst.insert(7);  // Folha
  bst.insert(13);
  bst.insert(17); // Folha
  
  console.log("Árvore antes de remover folhas:", bst.inOrderTraversal()); // [3, 5, 7, 10, 13, 15, 17]
  
  bst.removeLeaf(3); // Remove a folha com valor 3
  bst.removeLeaf(7); // Remove a folha com valor 7
  bst.removeLeaf(17); // Remove a folha com valor 17
  
  console.log("Árvore após remover folhas:", bst.inOrderTraversal()); // [5, 10, 13, 15]
  