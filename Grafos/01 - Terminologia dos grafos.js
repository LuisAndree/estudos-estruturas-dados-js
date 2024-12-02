/*
 * Terminologia de Grafos
 * 
 * Um grafo é uma estrutura de dados composta por um conjunto de vértices (nós) e um conjunto de arestas que conectam pares de vértices.
 */

// Definição de um grafo básico
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
  
      this.adjList.get(vertex1).push(vertex2);
      if (!this.isDirected) {
        this.adjList.get(vertex2).push(vertex1);
      }
    }
  
    // Imprime o grafo
    printGraph() {
      for (let [vertex, edges] of this.adjList.entries()) {
        console.log(`${vertex} -> ${edges.join(', ')}`);
      }
    }
  }
  
  // Terminologia Básica de Grafos:
  
  /*
  1. Vértices (Nodes):
     - Os elementos básicos de um grafo, que podem representar objetos, pessoas ou locais.
  
  2. Arestas (Edges):
     - Conexões entre os vértices.
     - Em grafos não direcionados, as arestas não possuem direção.
     - Em grafos direcionados, as arestas possuem direção (de um vértice a outro).
  
  3. Grafo Direcionado (Directed Graph):
     - Um grafo em que as arestas têm direção. Exemplo: A -> B.
  
  4. Grafo Não Direcionado (Undirected Graph):
     - Um grafo em que as arestas não têm direção. Exemplo: A -- B.
  
  5. Grafo Ponderado (Weighted Graph):
     - Um grafo em que as arestas possuem um peso ou custo associado.
  
  6. Caminho (Path):
     - Uma sequência de vértices conectados por arestas.
  
  7. Ciclo (Cycle):
     - Um caminho que começa e termina no mesmo vértice.
  
  8. Grafo Conexo:
     - Um grafo não direcionado em que há pelo menos um caminho entre qualquer par de vértices.
  
  9. Grafo Completo:
     - Um grafo em que há uma aresta entre cada par de vértices.
  
  10. Grau de um Vértice (Degree):
      - O número de arestas conectadas a um vértice.
      - Em grafos direcionados:
        - Grau de entrada (In-degree): Número de arestas que chegam a um vértice.
        - Grau de saída (Out-degree): Número de arestas que saem de um vértice.
  */
  
  // Exemplo de uso:
  const graph = new Graph(true); 
  graph.addEdge('A', 'B');
  graph.addEdge('A', 'C');
  graph.addEdge('B', 'D');
  graph.addEdge('C', 'D');
  graph.addEdge('D', 'A');
  
  graph.printGraph();

  
  