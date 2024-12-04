/*
 * Implementação de Busca em Profundidade (DFS) na classe Graph
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
  
    // Busca em Profundidade (DFS) - Versão Recursiva
    dfsRecursive(startVertex) {
      const visited = new Set();   // Conjunto de vértices visitados
      const result = [];           // Lista para armazenar a ordem de visita dos vértices
  
      const dfs = (vertex) => {
        if (!vertex || visited.has(vertex)) return;
        visited.add(vertex);       // Marca o vértice como visitado
        result.push(vertex);       // Armazena o vértice no resultado
  
        const neighbors = this.adjList.get(vertex) || [];
        for (const neighbor of neighbors) {
          dfs(neighbor);           // Chamada recursiva para os vizinhos
        }
      };
  
      dfs(startVertex);
      return result;
    }
  
    // Busca em Profundidade (DFS) - Versão Iterativa
    dfsIterative(startVertex) {
      const stack = [startVertex]; // Pilha para controlar a ordem de visita
      const visited = new Set();   // Conjunto de vértices visitados
      const result = [];           // Lista para armazenar a ordem de visita dos vértices
  
      while (stack.length > 0) {
        const vertex = stack.pop(); // Remove o último vértice adicionado à pilha
  
        if (!visited.has(vertex)) {
          visited.add(vertex);     // Marca o vértice como visitado
          result.push(vertex);     // Armazena o vértice no resultado
  
          const neighbors = this.adjList.get(vertex) || [];
          for (let i = neighbors.length - 1; i >= 0; i--) {
            stack.push(neighbors[i]); // Adiciona os vizinhos à pilha (ordem inversa para DFS)
          }
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
  
  console.log('\nDFS Recursivo a partir do vértice A:', graph.dfsRecursive('A'));
  // Saída esperada: [ 'A', 'B', 'D', 'F', 'C', 'E' ]
  
  console.log('\nDFS Iterativo a partir do vértice A:', graph.dfsIterative('A'));
  // Saída esperada: [ 'A', 'B', 'D', 'F', 'C', 'E' ]
  