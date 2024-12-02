class MaxHeap {
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
  
    // Retorna o valor máximo (raiz) sem removê-lo
    peek() {
      return this.isEmpty() ? undefined : this.heap[0];
    }
  
    // Insere um novo valor na heap
    insert(value) {
      this.heap.push(value);
      this.siftUp(this.size() - 1);
    }
  
    // Remove e retorna o valor máximo (raiz)
    extractMax() {
      if (this.isEmpty()) return undefined;
  
      if (this.size() === 1) return this.heap.pop();
  
      const max = this.heap[0];
      this.heap[0] = this.heap.pop(); // Substitui a raiz pelo último elemento
      this.siftDown(0); // Reorganiza o heap
      return max;
    }
  
    // Operação sift up: Move o elemento para cima para restaurar a propriedade do heap
    siftUp(index) {
      let parentIndex = this.getParentIndex(index);
      while (index > 0 && this.heap[index] > this.heap[parentIndex]) {
        this.swap(index, parentIndex);
        index = parentIndex;
        parentIndex = this.getParentIndex(index);
      }
    }
  
    // Operação sift down: Move o elemento para baixo para restaurar a propriedade do heap
    siftDown(index) {
      let largest = index;
      const left = this.getLeftIndex(index);
      const right = this.getRightIndex(index);
  
      if (left < this.size() && this.heap[left] > this.heap[largest]) {
        largest = left;
      }
  
      if (right < this.size() && this.heap[right] > this.heap[largest]) {
        largest = right;
      }
  
      if (largest !== index) {
        this.swap(index, largest);
        this.siftDown(largest); // Continua ajustando recursivamente
      }
    }
  
    // Imprime a heap
    print() {
      console.log('Heap:', this.heap);
    }
  }
  
  // Exemplo de uso:
  const maxHeap = new MaxHeap();
  maxHeap.insert(10);
  maxHeap.insert(5);
  maxHeap.insert(20);
  maxHeap.insert(1);
  maxHeap.insert(15);
  maxHeap.insert(30);
  
  maxHeap.print(); // Heap: [30, 15, 20, 1, 5, 10]
  
  console.log('Max value extracted:', maxHeap.extractMax()); // Max value extracted: 30
  maxHeap.print(); // Heap após extrair max: [20, 15, 10, 1, 5]
  