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
    peek() {
      return this.isEmpty() ? undefined : this.heap[0];
    }
  
    // Insere um novo valor na heap
    insert(value) {
      this.heap.push(value);
      this.siftUp(this.size() - 1);
    }
  
    // Remove e retorna o valor mínimo (raiz)
    extractMin() {
      if (this.isEmpty()) return undefined;
  
      if (this.size() === 1) return this.heap.pop();
  
      const min = this.heap[0];
      this.heap[0] = this.heap.pop(); // Substitui a raiz pelo último elemento
      this.siftDown(0); // Reorganiza o heap
      return min;
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
  
    // Operação sift down: Move o elemento para baixo para restaurar a propriedade do heap
    siftDown(index) {
      let smallest = index;
      const left = this.getLeftIndex(index);
      const right = this.getRightIndex(index);
  
      if (left < this.size() && this.heap[left] < this.heap[smallest]) {
        smallest = left;
      }
  
      if (right < this.size() && this.heap[right] < this.heap[smallest]) {
        smallest = right;
      }
  
      if (smallest !== index) {
        this.swap(index, smallest);
        this.siftDown(smallest); // Continua ajustando recursivamente
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
  
  console.log('Min value extracted:', minHeap.extractMin()); // Min value extracted: 1
  minHeap.print(); // Heap após extrair min: [5, 10, 20, 30, 15]
  