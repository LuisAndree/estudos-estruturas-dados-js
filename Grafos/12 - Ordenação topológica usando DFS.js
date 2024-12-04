// Classe Graph com Ordenação Topológica usando DFS
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
  
    // Adiciona uma aresta ao grafo
    addEdge(vertex1, vertex2) {
      this.addVertex(vertex1);
      this.addVertex(vertex2);
      this.adjList.get(vertex1).push(vertex2); // Direção: vertex1 -> vertex2
    }
  
    // Imprime a lista de adjacências
    printGraph() {
      console.log('Lista de Adjacências:');
      for (const [vertex, edges] of this.adjList.entries()) {
        console.log(`${vertex} -> ${edges.join(', ')}`);
      }
    }
  
    // Ordenação Topológica usando DFS
    topologicalSort() {
      const visited = new Set();  // Conjunto de vértices visitados
      const stack = [];           // Pilha para armazenar a ordem topológica
  
      const dfs = (vertex) => {
        visited.add(vertex);
  
        const neighbors = this.adjList.get(vertex) || [];
        for (const neighbor of neighbors) {
          if (!visited.has(neighbor)) {
            dfs(neighbor);
          }
        }
  
        stack.push(vertex); // Adiciona o vértice à pilha após visitar seus vizinhos
      };
  
      for (const vertex of this.adjList.keys()) {
        if (!visited.has(vertex)) {
          dfs(vertex);
        }
      }
  
      return stack.reverse(); // A pilha invertida contém a ordenação topológica
    }
  }
  
  // Exemplo de uso
  const graph = new Graph();
  graph.addEdge('A', 'C');
  graph.addEdge('B', 'C');
  graph.addEdge('B', 'D');
  graph.addEdge('C', 'E');
  graph.addEdge('D', 'F');
  graph.addEdge('E', 'F');
  
  graph.printGraph();
  
  console.log('\nOrdenação Topológica:', graph.topologicalSort());
  // Saída esperada: [ 'B', 'A', 'C', 'D', 'E', 'F' ]
  