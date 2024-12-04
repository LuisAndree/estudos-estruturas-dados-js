// Classe Graph com Algoritmo de Dijkstra
class Graph {
    constructor() {
      this.adjList = new Map(); // Lista de adjacências
    }
  
    // Adiciona um vértice ao grafo
    addVertex(vertex) {
      if (!this.adjList.has(vertex)) {
        this.adjList.set(vertex, []);
      }
    }
  
    // Adiciona uma aresta com peso ao grafo
    addEdge(vertex1, vertex2, weight) {
      this.addVertex(vertex1);
      this.addVertex(vertex2);
      this.adjList.get(vertex1).push({ vertex: vertex2, weight });
    }
  
    // Imprime a lista de adjacências
    printGraph() {
      console.log('Lista de Adjacências:');
      for (const [vertex, edges] of this.adjList.entries()) {
        const formattedEdges = edges.map(edge => `${edge.vertex}(${edge.weight})`).join(', ');
        console.log(`${vertex} -> ${formattedEdges}`);
      }
    }
  
    // Algoritmo de Dijkstra
    dijkstra(startVertex) {
      const distances = new Map(); // Distância mínima de startVertex a cada vértice
      const previous = new Map();  // Vértices anteriores no caminho mais curto
      const priorityQueue = new MinHeap(); // Fila de prioridade baseada em heap
  
      // Inicializa as distâncias com infinito, exceto para o startVertex
      for (const vertex of this.adjList.keys()) {
        distances.set(vertex, Infinity);
        previous.set(vertex, null);
      }
      distances.set(startVertex, 0);
      priorityQueue.insert({ vertex: startVertex, distance: 0 });
  
      while (!priorityQueue.isEmpty()) {
        const { vertex: currentVertex } = priorityQueue.extractMin();
  
        for (const neighbor of this.adjList.get(currentVertex)) {
          const { vertex: neighborVertex, weight } = neighbor;
          const newDist = distances.get(currentVertex) + weight;
  
          if (newDist < distances.get(neighborVertex)) {
            distances.set(neighborVertex, newDist);
            previous.set(neighborVertex, currentVertex);
            priorityQueue.insert({ vertex: neighborVertex, distance: newDist });
          }
        }
      }
  
      return { distances, previous };
    }
  
    // Reconstrói o caminho mais curto do startVertex a um destino
    shortestPathTo(targetVertex, previous) {
      const path = [];
      let current = targetVertex;
      while (current) {
        path.unshift(current);
        current = previous.get(current);
      }
      return path;
    }
  }
  
  // Implementação de uma MinHeap para Dijkstra
  class MinHeap {
    constructor() {
      this.heap = [];
    }
  
    insert(node) {
      this.heap.push(node);
      this.siftUp(this.heap.length - 1);
    }
  
    extractMin() {
      if (this.heap.length === 1) return this.heap.pop();
      const min = this.heap[0];
      this.heap[0] = this.heap.pop();
      this.siftDown(0);
      return min;
    }
  
    siftUp(index) {
      while (index > 0) {
        const parent = Math.floor((index - 1) / 2);
        if (this.heap[parent].distance <= this.heap[index].distance) break;
        [this.heap[parent], this.heap[index]] = [this.heap[index], this.heap[parent]];
        index = parent;
      }
    }
  
    siftDown(index) {
      const length = this.heap.length;
      while (true) {
        const left = 2 * index + 1;
        const right = 2 * index + 2;
        let smallest = index;
  
        if (left < length && this.heap[left].distance < this.heap[smallest].distance) {
          smallest = left;
        }
        if (right < length && this.heap[right].distance < this.heap[smallest].distance) {
          smallest = right;
        }
        if (smallest === index) break;
  
        [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]];
        index = smallest;
      }
    }
  
    isEmpty() {
      return this.heap.length === 0;
    }
  }
  
  // Exemplo de uso
  const graph = new Graph();
  graph.addEdge('A', 'B', 4);
  graph.addEdge('A', 'C', 2);
  graph.addEdge('B', 'C', 1);
  graph.addEdge('B', 'D', 5);
  graph.addEdge('C', 'D', 8);
  graph.addEdge('C', 'E', 10);
  graph.addEdge('D', 'E', 2);
  
  graph.printGraph();
  
  const { distances, previous } = graph.dijkstra('A');
  
  console.log('\nDistâncias:', distances);
  console.log('\nCaminho mais curto até E:', graph.shortestPathTo('E', previous));
  // Saída esperada: [ 'A', 'C', 'D', 'E' ]
  