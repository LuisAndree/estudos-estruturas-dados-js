/*
 * Implementação de Busca em Largura (BFS) na classe Graph
 */

class Graph {
    constructor(isDirected = false) {
      this.isDirected = isDirected; // Define se o grafo é direcionado
      this.adjList = new Map();     // Lista de adjacências
    }
  
    // Adiciona um vértice ao grafo
    addVertex(vertex) {
      if (!this.adjList.has(vertex)) {
        this.adjList.set(vertex, []);
      }
    }
  
    // Adiciona uma aresta ao grafo
    addEdge(vertex1, vertex2) {
      if (!this.adjList.has(vertex1)) this.addVertex(vertex1);
      if (!this.adjList.has(vertex2)) this.addVertex(vertex2);
  
      this.adjList.get(vertex1).push(vertex2); // Adiciona conexão de vertex1 para vertex2
      if (!this.isDirected) {
        this.adjList.get(vertex2).push(vertex1); // Adiciona conexão inversa em grafos não direcionados
      }
    }
  
    // Busca em Largura (BFS)
    bfs(startVertex) {
      const visited = new Set();     // Conjunto para manter os vértices visitados
      const queue = [startVertex];   // Fila para armazenar vértices a serem visitados
      const result = [];             // Lista para armazenar a ordem de visita dos vértices
  
      while (queue.length > 0) {
        const vertex = queue.shift(); // Remove o primeiro elemento da fila
  
        if (!visited.has(vertex)) {
          visited.add(vertex);        // Marca o vértice como visitado
          result.push(vertex);        // Adiciona o vértice ao resultado
  
          const neighbors = this.adjList.get(vertex) || []; // Obtém vizinhos do vértice
          neighbors.forEach((neighbor) => {
            if (!visited.has(neighbor)) {
              queue.push(neighbor);  // Adiciona vizinhos não visitados à fila
            }
          });
        }
      }
  
      return result;
    }
  
    // Imprime a lista de adjacências
    printGraph() {
      console.log('Lista de Adjacências:');
      for (let [vertex, edges] of this.adjList.entries()) {
        console.log(`${vertex} -> ${edges.join(', ')}`);
      }
    }
  }
  
  // Exemplo de uso
  const graph = new Graph(false);
  graph.addEdge('A', 'B');
  graph.addEdge('A', 'C');
  graph.addEdge('B', 'D');
  graph.addEdge('C', 'E');
  graph.addEdge('D', 'F');
  graph.addEdge('E', 'F');
  
  graph.printGraph();
  
  console.log('\nBFS a partir do vértice A:', graph.bfs('A'));
  // Saída esperada: BFS a partir do vértice A: [ 'A', 'B', 'C', 'D', 'E', 'F' ]
  