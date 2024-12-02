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
  
    // Retorna o tamanho da heap
    size() {
      return this.heap.length;
    }
  
    // Insere um novo valor na heap
    insert(value) {
      this.heap.push(value);
      this.siftUp(this.size() - 1);
    }
  
    // Move o elemento para cima para restaurar a propriedade do MaxHeap
    siftUp(index) {
      let parentIndex = this.getParentIndex(index);
      while (index > 0 && this.heap[index] > this.heap[parentIndex]) {
        this.swap(index, parentIndex);
        index = parentIndex;
        parentIndex = this.getParentIndex(index);
      }
    }
  
    // Move o elemento para baixo para restaurar a propriedade do MaxHeap
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
        this.siftDown(largest);
      }
    }
  
    // Constrói a MaxHeap a partir de um array
    buildHeap(array) {
      this.heap = array;
      for (let i = Math.floor(this.size() / 2) - 1; i >= 0; i--) {
        this.siftDown(i);
      }
    }
  
    // Remove e retorna o maior valor (raiz)
    extractMax() {
      if (this.size() === 1) return this.heap.pop();
  
      const max = this.heap[0];
      this.heap[0] = this.heap.pop(); // Substitui a raiz pelo último elemento
      this.siftDown(0); // Reorganiza o heap
      return max;
    }
  }
  
  // Função de heap sort
  function heapSort(array) {
    const maxHeap = new MaxHeap();
    maxHeap.buildHeap(array);
  
    const sortedArray = [];
    while (maxHeap.size() > 0) {
      sortedArray.unshift(maxHeap.extractMax()); // Insere os valores extraídos no início do array ordenado
    }
  
    return sortedArray;
  }
  
  // Exemplo de uso:
  const array = [10, 20, 15, 30, 40];
  console.log('Array original:', array);
  
  const sortedArray = heapSort(array);
  console.log('Array ordenado:', sortedArray); // [10, 15, 20, 30, 40]
  