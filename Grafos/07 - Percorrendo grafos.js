/*
 * Classe Graph com métodos de percurso BFS e DFS
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
      const visited = new Set();
      const queue = [startVertex];
      const result = [];
  
      while (queue.length > 0) {
        const vertex = queue.shift();
  
        if (!visited.has(vertex)) {
          visited.add(vertex);
          result.push(vertex);
          const neighbors = this.adjList.get(vertex) || [];
          neighbors.forEach((neighbor) => {
            if (!visited.has(neighbor)) {
              queue.push(neighbor);
            }
          });
        }
      }
  
      return result;
    }
  
    // Busca em Profundidade (DFS) - Recursiva
    dfsRecursive(startVertex, visited = new Set(), result = []) {
      visited.add(startVertex);
      result.push(startVertex);
  
      const neighbors = this.adjList.get(startVertex) || [];
      for (const neighbor of neighbors) {
        if (!visited.has(neighbor)) {
          this.dfsRecursive(neighbor, visited, result);
        }
      }
  
      return result;
    }
  
    // Busca em Profundidade (DFS) - Iterativa
    dfsIterative(startVertex) {
      const visited = new Set();
      const stack = [startVertex];
      const result = [];
  
      while (stack.length > 0) {
        const vertex = stack.pop();
  
        if (!visited.has(vertex)) {
          visited.add(vertex);
          result.push(vertex);
          const neighbors = this.adjList.get(vertex) || [];
          neighbors.forEach((neighbor) => {
            if (!visited.has(neighbor)) {
              stack.push(neighbor);
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
  
  console.log('\nBFS:', graph.bfs('A'));
  // Saída: BFS: [ 'A', 'B', 'C', 'D', 'E', 'F' ]
  
  console.log('\nDFS Recursiva:', graph.dfsRecursive('A'));
  // Saída: DFS Recursiva: [ 'A', 'B', 'D', 'F', 'C', 'E' ]
  
  console.log('\nDFS Iterativa:', graph.dfsIterative('A'));
  // Saída: DFS Iterativa: [ 'A', 'C', 'E', 'F', 'B', 'D' ]
  