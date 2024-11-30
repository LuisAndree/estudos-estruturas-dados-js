class BinaryHeap {
    constructor(compareFn = (a, b) => a - b) {
      this.heap = [];
      this.compareFn = compareFn; // Define a comparação, para Min-Heap (default) ou Max-Heap
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
  
    // Troca os elementos na heap
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
  
    // Retorna o valor mínimo ou máximo (raiz) sem removê-lo
    peek() {
      return this.isEmpty() ? undefined : this.heap[0];
    }
  
    // Insere um novo valor na heap
    insert(value) {
      this.heap.push(value);
      this.heapifyUp(this.size() - 1);
    }
  
    // Remove e retorna o valor mínimo ou máximo (raiz)
    extract() {
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
      while (index > 0 && this.compareFn(this.heap[index], this.heap[parentIndex]) < 0) {
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
  
      if (leftIndex < this.size() && this.compareFn(this.heap[leftIndex], this.heap[smallest]) < 0) {
        smallest = leftIndex;
      }
  
      if (rightIndex < this.size() && this.compareFn(this.heap[rightIndex], this.heap[smallest]) < 0) {
        smallest = rightIndex;
      }
  
      if (smallest !== index) {
        this.swap(index, smallest);
        this.heapifyDown(smallest);
      }
    }
  }
  
  // Exemplo de uso:
  
  // Min-Heap (padrão)
  const minHeap = new BinaryHeap();
  minHeap.insert(10);
  minHeap.insert(5);
  minHeap.insert(20);
  minHeap.insert(1);
  console.log('Min-Heap:', minHeap.heap); // [1, 5, 20, 10]
  console.log('Min value:', minHeap.extract()); // 1
  console.log('Min-Heap após extração:', minHeap.heap); // [5, 10, 20]
  
  // Max-Heap
  const maxHeap = new BinaryHeap((a, b) => b - a);
  maxHeap.insert(10);
  maxHeap.insert(5);
  maxHeap.insert(20);
  maxHeap.insert(1);
  console.log('Max-Heap:', maxHeap.heap); // [20, 10, 5, 1]
  console.log('Max value:', maxHeap.extract()); // 20
  console.log('Max-Heap após extração:', maxHeap.heap); // [10, 1, 5]
  