/*
 * Busca em Largura (BFS) para encontrar os caminhos mais curtos em um grafo
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
  
      this.adjList.get(vertex1).push(vertex2); // Conexão de vertex1 para vertex2
      if (!this.isDirected) {
        this.adjList.get(vertex2).push(vertex1); // Conexão inversa em grafos não direcionados
      }
    }
  
    // Busca em Largura para calcular os caminhos mais curtos
    bfsShortestPaths(startVertex) {
      const distances = new Map();  // Distâncias do startVertex para cada vértice
      const predecessors = new Map(); // Predecessores para reconstruir caminhos
      const queue = [startVertex];  // Fila para visitar vértices
  
      // Inicializa as distâncias e predecessores
      this.adjList.forEach((_, vertex) => {
        distances.set(vertex, Infinity);
        predecessors.set(vertex, null);
      });
      distances.set(startVertex, 0);
  
      while (queue.length > 0) {
        const currentVertex = queue.shift(); // Retira o próximo vértice da fila
        const currentDistance = distances.get(currentVertex);
  
        // Explora os vizinhos do vértice atual
        const neighbors = this.adjList.get(currentVertex) || [];
        for (const neighbor of neighbors) {
          if (distances.get(neighbor) === Infinity) {
            distances.set(neighbor, currentDistance + 1);
            predecessors.set(neighbor, currentVertex);
            queue.push(neighbor); // Adiciona o vizinho à fila
          }
        }
      }
  
      return { distances, predecessors };
    }
  
    // Reconstrói o caminho mais curto de startVertex para endVertex
    reconstructPath(predecessors, endVertex) {
      const path = [];
      let currentVertex = endVertex;
  
      while (currentVertex !== null) {
        path.unshift(currentVertex);
        currentVertex = predecessors.get(currentVertex);
      }
  
      return path;
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
  
  const { distances, predecessors } = graph.bfsShortestPaths('A');
  
  console.log('\nDistâncias a partir do vértice A:');
  for (let [vertex, distance] of distances.entries()) {
    console.log(`Distância para ${vertex}: ${distance}`);
  }
  
  console.log('\nCaminho mais curto de A para F:');
  const path = graph.reconstructPath(predecessors, 'F');
  console.log(path.join(' -> '));
  // Saída esperada: Caminho mais curto de A para F: A -> B -> D -> F
  