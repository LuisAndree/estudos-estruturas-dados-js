class BinaryTreeArray {
    constructor() {
      this.tree = [];
    }
  
    // Adiciona um valor na próxima posição disponível
    add(value) {
      this.tree.push(value);
    }
  
    // Retorna o índice do nó pai de um dado índice
    getParentIndex(index) {
      return Math.floor((index - 1) / 2);
    }
  
    // Retorna o índice do filho esquerdo de um dado índice
    getLeftIndex(index) {
      return 2 * index + 1;
    }
  
    // Retorna o índice do filho direito de um dado índice
    getRightIndex(index) {
      return 2 * index + 2;
    }
  
    // Retorna o valor do pai de um dado índice
    getParent(index) {
      const parentIndex = this.getParentIndex(index);
      return parentIndex >= 0 ? this.tree[parentIndex] : undefined;
    }
  
    // Retorna o valor do filho esquerdo de um dado índice
    getLeftChild(index) {
      const leftIndex = this.getLeftIndex(index);
      return leftIndex < this.tree.length ? this.tree[leftIndex] : undefined;
    }
  
    // Retorna o valor do filho direito de um dado índice
    getRightChild(index) {
      const rightIndex = this.getRightIndex(index);
      return rightIndex < this.tree.length ? this.tree[rightIndex] : undefined;
    }
  
    // Percorre a árvore em ordem (in-order traversal)
    inOrderTraversal(index = 0) {
      if (index >= this.tree.length || this.tree[index] === undefined) return;
  
      this.inOrderTraversal(this.getLeftIndex(index));
      console.log(this.tree[index]);
      this.inOrderTraversal(this.getRightIndex(index));
    }
  
    // Percorre a árvore em pré-ordem (pre-order traversal)
    preOrderTraversal(index = 0) {
      if (index >= this.tree.length || this.tree[index] === undefined) return;
  
      console.log(this.tree[index]);
      this.preOrderTraversal(this.getLeftIndex(index));
      this.preOrderTraversal(this.getRightIndex(index));
    }
  
    // Percorre a árvore em pós-ordem (post-order traversal)
    postOrderTraversal(index = 0) {
      if (index >= this.tree.length || this.tree[index] === undefined) return;
  
      this.postOrderTraversal(this.getLeftIndex(index));
      this.postOrderTraversal(this.getRightIndex(index));
      console.log(this.tree[index]);
    }
  
    // Imprime a árvore como um array
    print() {
      console.log('Árvore como Array:', this.tree);
    }
  }
  
  // Exemplo de uso da classe BinaryTreeArray
  const tree = new BinaryTreeArray();
  
  // Adicionando valores à árvore
  tree.add(1); // Raiz
  tree.add(2); // Filho esquerdo da raiz
  tree.add(3); // Filho direito da raiz
  tree.add(4); // Filho esquerdo de 2
  tree.add(5); // Filho direito de 2
  tree.add(6); // Filho esquerdo de 3
  tree.add(7); // Filho direito de 3
  
  // Exibição da árvore como array
  tree.print(); // Árvore como Array: [1, 2, 3, 4, 5, 6, 7]
  
  // Percursos
  console.log('In-Order Traversal:');
  tree.inOrderTraversal(); // 4, 2, 5, 1, 6, 3, 7
  
  console.log('Pre-Order Traversal:');
  tree.preOrderTraversal(); // 1, 2, 4, 5, 3, 6, 7
  
  console.log('Post-Order Traversal:');
  tree.postOrderTraversal(); // 4, 5, 2, 6, 7, 3, 1
  