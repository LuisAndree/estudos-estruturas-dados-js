class MinHeap {
    constructor() {
      this.heap = [];
    }
  
    // Retorna o índice do pai
    getParentIndex(index) {
      return Math.floor((index - 1) / 2);
    }
  
    // Retorna o índice do filho esquerdo
    getLeftIndex(index) {
      return 2 * index + 1;
    }
  
    // Retorna o índice do filho direito
    getRightIndex(index) {
      return 2 * index + 2;
    }
  
    // Troca os elementos no heap
    swap(index1, index2) {
      [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]];
    }
  
    // Verifica se a heap está vazia
    isEmpty() {
      return this.heap.length === 0;
    }
  
    // Retorna o tamanho da heap
    size() {
      return this.heap.length;
    }
  
    // Retorna o valor mínimo (raiz) sem removê-lo
    findMin() {
      return this.isEmpty() ? undefined : this.heap[0];
    }
  
    // Retorna o valor máximo na heap
    findMax() {
      if (this.isEmpty()) {
        return undefined;
      }
  
      // Em um MinHeap, o maior valor estará em um dos filhos da última camada completa.
      let max = this.heap[0];
      const startIndex = this.getLeftIndex(0);
  
      for (let i = startIndex; i < this.size(); i++) {
        if (this.heap[i] > max) {
          max = this.heap[i];
        }
      }
  
      return max;
    }
  
    // Insere um novo valor na heap
    insert(value) {
      this.heap.push(value);
      this.siftUp(this.size() - 1);
    }
  
    // Operação sift up: Move o elemento para cima para restaurar a propriedade do heap
    siftUp(index) {
      let parentIndex = this.getParentIndex(index);
      while (index > 0 && this.heap[index] < this.heap[parentIndex]) {
        this.swap(index, parentIndex);
        index = parentIndex;
        parentIndex = this.getParentIndex(index);
      }
    }
  
    // Imprime a heap
    print() {
      console.log('Heap:', this.heap);
    }
  }
  
  // Exemplo de uso:
  const minHeap = new MinHeap();
  minHeap.insert(10);
  minHeap.insert(5);
  minHeap.insert(20);
  minHeap.insert(1);
  minHeap.insert(15);
  minHeap.insert(30);
  
  minHeap.print(); // Heap: [1, 5, 20, 10, 15, 30]
  
  console.log('Min value:', minHeap.findMin()); // Min value: 1
  console.log('Max value:', minHeap.findMax()); // Max value: 30
  