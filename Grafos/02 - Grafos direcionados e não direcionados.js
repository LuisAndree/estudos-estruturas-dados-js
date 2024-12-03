/*
 * Implementação de Grafos Direcionados e Não Direcionados
 */

class Graph {
    constructor(isDirected = false) {
      this.isDirected = isDirected; // Define se o grafo é direcionado ou não
      this.adjList = new Map(); // Lista de adjacências
    }
  
    // Adiciona um vértice ao grafo
    addVertex(vertex) {
      if (!this.adjList.has(vertex)) {
        this.adjList.set(vertex, []);
      }
    }
  
    // Adiciona uma aresta ao grafo
    addEdge(vertex1, vertex2) {
      if (!this.adjList.has(vertex1)) {
        this.addVertex(vertex1);
      }
      if (!this.adjList.has(vertex2)) {
        this.addVertex(vertex2);
      }
  
      this.adjList.get(vertex1).push(vertex2); // Aresta de vertex1 para vertex2
      if (!this.isDirected) {
        this.adjList.get(vertex2).push(vertex1); // Aresta bidirecional se não for direcionado
      }
    }
  
    // Verifica se uma aresta existe
    hasEdge(vertex1, vertex2) {
      if (!this.adjList.has(vertex1)) return false;
      return this.adjList.get(vertex1).includes(vertex2);
    }
  
    // Retorna os vizinhos de um vértice
    getNeighbors(vertex) {
      return this.adjList.get(vertex) || [];
    }
  
    // Imprime o grafo
    printGraph() {
      for (let [vertex, edges] of this.adjList.entries()) {
        console.log(`${vertex} -> ${edges.join(', ')}`);
      }
    }
  }
  
  // Exemplo de uso de Grafo Não Direcionado
  console.log('Grafo Não Direcionado:');
  const undirectedGraph = new Graph(false);
  undirectedGraph.addEdge('A', 'B');
  undirectedGraph.addEdge('A', 'C');
  undirectedGraph.addEdge('B', 'D');
  undirectedGraph.addEdge('C', 'D');
  undirectedGraph.printGraph();
  /*
  Saída:
  A -> B, C
  B -> A, D
  C -> A, D
  D -> B, C
  */
  
  // Exemplo de uso de Grafo Direcionado
  console.log('\nGrafo Direcionado:');
  const directedGraph = new Graph(true);
  directedGraph.addEdge('A', 'B');
  directedGraph.addEdge('A', 'C');
  directedGraph.addEdge('B', 'D');
  directedGraph.addEdge('C', 'D');
  directedGraph.printGraph();
  /*
  Saída:
  A -> B, C
  B -> D
  C -> D
  D ->
  */
  
  