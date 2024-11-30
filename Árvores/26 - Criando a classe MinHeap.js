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
      this.heapifyUp(this.size() - 1);
    }
  
    // Remove e retorna o valor mínimo (raiz)
    extractMin() {
      if (this.isEmpty()) {
        return undefined;
      }
      if (this.size() === 1) {
        return this.heap.pop();
      }
  
      const root = this.heap[0];
      this.heap[0] = this.heap.pop();
      this.heapifyDown(0);
      return root;
    }
  
    // Move o elemento para cima para restaurar a propriedade do heap
    heapifyUp(index) {
      let parentIndex = this.getParentIndex(index);
      while (index > 0 && this.heap[index] < this.heap[parentIndex]) {
        this.swap(index, parentIndex);
        index = parentIndex;
        parentIndex = this.getParentIndex(index);
      }
    }
  
    // Move o elemento para baixo para restaurar a propriedade do heap
    heapifyDown(index) {
      let leftIndex = this.getLeftIndex(index);
      let rightIndex = this.getRightIndex(index);
      let smallest = index;
  
      if (leftIndex < this.size() && this.heap[leftIndex] < this.heap[smallest]) {
        smallest = leftIndex;
      }
  
      if (rightIndex < this.size() && this.heap[rightIndex] < this.heap[smallest]) {
        smallest = rightIndex;
      }
  
      if (smallest !== index) {
        this.swap(index, smallest);
        this.heapifyDown(smallest);
      }
    }
  }
  
  // Exemplo de uso da classe MinHeap:
  const minHeap = new MinHeap();
  minHeap.insert(10);
  minHeap.insert(5);
  minHeap.insert(20);
  minHeap.insert(1);
  
  console.log('Min-Heap:', minHeap.heap); // [1, 5, 20, 10]
  console.log('Min value:', minHeap.extractMin()); // 1
  console.log('Min-Heap após extração:', minHeap.heap); // [5, 10, 20]
  
  minHeap.insert(3);
  console.log('Min-Heap após inserir 3:', minHeap.heap); // [3, 5, 20, 10]
  console.log('Min value:', minHeap.extractMin()); // 3
  console.log('Min-Heap após extração:', minHeap.heap); // [5, 10, 20]
  