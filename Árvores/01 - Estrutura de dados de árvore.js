// Classe que representa um nó
class TreeNode {
    constructor(value) {
      this.value = value; // Valor armazenado no nó
      this.children = []; // Lista de nós filhos
    }
  
    // Adicionar um filho ao nó atual
    addChild(child) {
      this.children.push(child);
    }
  }
  
  // Classe para representar a árvore
  class Tree {
    constructor() {
      this.root = null; // Inicialmente, a árvore não tem raiz
    }
  
    // Define a raiz da árvore
    setRoot(value) {
      this.root = new TreeNode(value);
    }
  
    // Busca um valor na árvore (profundidade)
    searchDFS(node, value) {
      if (!node) return null;
      if (node.value === value) return node;
  
      for (let child of node.children) {
        const found = this.searchDFS(child, value);
        if (found) return found;
      }
      return null;
    }
  
    // Busca um valor na árvore (largura)
    searchBFS(value) {
      if (!this.root) return null;
      const queue = [this.root];
      
      while (queue.length > 0) {
        const current = queue.shift();
        if (current.value === value) return current;
  
        for (let child of current.children) {
          queue.push(child);
        }
      }
      return null;
    }
  }
  
  // Exemplo de uso
  const tree = new Tree();
  tree.setRoot("Raiz");
  
  // Adicionando filhos à raiz
  tree.root.addChild(new TreeNode("Filho 1"));
  tree.root.addChild(new TreeNode("Filho 2"));
  
  // Adicionando netos
  tree.root.children[0].addChild(new TreeNode("Neto 1.1"));
  tree.root.children[0].addChild(new TreeNode("Neto 1.2"));
  tree.root.children[1].addChild(new TreeNode("Neto 2.1"));
  
  console.log(tree); // Estrutura completa
  console.log("DFS Busca: ", tree.searchDFS(tree.root, "Neto 1.2")); // Busca em profundidade
  console.log("BFS Busca: ", tree.searchBFS("Neto 2.1")); // Busca em largura
  