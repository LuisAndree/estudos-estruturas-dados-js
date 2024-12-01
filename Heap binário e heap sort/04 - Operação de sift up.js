class MinHeap {
    constructor() {
      this.heap = [];
    }
  
    // Retorna o índice do pai
    getParentIndex(index) {
      return Math.floor((index - 1) / 2);
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
      this.heap.push(value); // Adiciona o valor no final da heap
      this.siftUp(this.size() - 1); // Reorganiza para manter a propriedade do heap
    }
  
    // Operação sift up: Move o elemento para cima para restaurar a propriedade do heap
    siftUp(index) {
      let parentIndex = this.getParentIndex(index);
      while (index > 0 && this.heap[index] < this.heap[parentIndex]) {
        this.swap(index, parentIndex); // Troca o elemento com seu pai
        index = parentIndex; // Atualiza o índice para o pai
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
  
  minHeap.print(); // Heap: [1, 5, 20, 10]
  
  minHeap.insert(3);
  minHeap.print(); // Heap: [1, 3, 20, 10, 5]
  