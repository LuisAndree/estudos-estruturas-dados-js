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
      if (!node) {
        return null; // Nó não encontrado
      }
  
      // Caso 1: O nó a ser removido está à esquerda
      if (key < node.key) {
        node.left = this._removeNode(node.left, key);
        return node;
      }
  
      // Caso 2: O nó a ser removido está à direita
      if (key > node.key) {
        node.right = this._removeNode(node.right, key);
        return node;
      }
  
      // Caso 3: Encontramos o nó a ser removido
      // Caso 3.1: O nó não tem filhos (nó folha)
      if (!node.left && !node.right) {
        return null; // Remove o nó
      }
  
      // Caso 3.2: O nó tem apenas um filho
      if (!node.left) {
        return node.right; // Retorna o filho à direita
      }
      if (!node.right) {
        return node.left; // Retorna o filho à esquerda
      }
  
      // Caso 3.3: O nó tem dois filhos
      // Encontra o menor valor na subárvore direita (sucessor)
      let minNode = this._findMin(node.right);
      node.key = minNode.key; // Substitui o valor do nó pelo valor do sucessor
      node.right = this._removeNode(node.right, minNode.key); // Remove o sucessor
      return node;
    }
  
    // Função auxiliar para encontrar o nó com o valor mínimo
    _findMin(node) {
      while (node.left) {
        node = node.left; // Continua até o nó mais à esquerda
      }
      return node;
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
  bst.insert(7);
  bst.insert(13);
  bst.insert(17);
  
  console.log("Árvore antes de remover 5:", bst.inOrderTraversal()); // [3, 5, 7, 10, 13, 15, 17]
  
  bst.remove(5); // Remove o nó com chave 5
  
  console.log("Árvore após remover 5:", bst.inOrderTraversal()); // [3, 7, 10, 13, 15, 17]
  