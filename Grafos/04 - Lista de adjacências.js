/*
 * Representação de Grafos usando Lista de Adjacências
 */

class AdjacencyListGraph {
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
      if (!this.adjList.has(vertex1)) {
        this.addVertex(vertex1);
      }
      if (!this.adjList.has(vertex2)) {
        this.addVertex(vertex2);
      }
  
      this.adjList.get(vertex1).push(vertex2); // Adiciona conexão de vertex1 para vertex2
      if (!this.isDirected) {
        this.adjList.get(vertex2).push(vertex1); // Adiciona conexão de vertex2 para vertex1 em grafos não direcionados
      }
    }
  
    // Verifica se existe uma aresta entre dois vértices
    hasEdge(vertex1, vertex2) {
      return this.adjList.has(vertex1) && this.adjList.get(vertex1).includes(vertex2);
    }
  
    // Retorna os vizinhos de um vértice
    getNeighbors(vertex) {
      return this.adjList.get(vertex) || [];
    }
  
    // Imprime a lista de adjacências
    printAdjList() {
      console.log('Lista de Adjacências:');
      for (let [vertex, edges] of this.adjList.entries()) {
        console.log(`${vertex} -> ${edges.join(', ')}`);
      }
    }
  }
  
  // Exemplo de uso com Grafo Não Direcionado
  console.log('Grafo Não Direcionado:');
  const undirectedGraph = new AdjacencyListGraph(false);
  undirectedGraph.addEdge('A', 'B');
  undirectedGraph.addEdge('A', 'C');
  undirectedGraph.addEdge('B', 'D');
  undirectedGraph.addEdge('C', 'D');
  undirectedGraph.printAdjList();
  /*
  Saída:
  Lista de Adjacências:
  A -> B, C
  B -> A, D
  C -> A, D
  D -> B, C
  */
  
  // Exemplo de uso com Grafo Direcionado
  console.log('\nGrafo Direcionado:');
  const directedGraph = new AdjacencyListGraph(true);
  directedGraph.addEdge('A', 'B');
  directedGraph.addEdge('A', 'C');
  directedGraph.addEdge('B', 'D');
  directedGraph.addEdge('C', 'D');
  directedGraph.printAdjList();
  /*
  Saída:
  Lista de Adjacências:
  A -> B, C
  B -> D
  C -> D
  D ->
  */
  