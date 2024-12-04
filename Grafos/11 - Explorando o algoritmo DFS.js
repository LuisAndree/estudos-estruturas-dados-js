// Classe Graph com implementações de DFS Recursivo e Iterativo
class Graph {
    constructor(isDirected = false) {
      this.isDirected = isDirected; // Indica se o grafo é direcionado
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
      this.addVertex(vertex1);
      this.addVertex(vertex2);
      this.adjList.get(vertex1).push(vertex2);
      if (!this.isDirected) {
        this.adjList.get(vertex2).push(vertex1);
      }
    }
  
    // Imprime a lista de adjacências
    printGraph() {
      console.log('Lista de Adjacências:');
      for (const [vertex, edges] of this.adjList.entries()) {
        console.log(`${vertex} -> ${edges.join(', ')}`);
      }
    }
  
    // Busca em Profundidade (DFS) - Recursivo
    dfsRecursive(startVertex) {
      const visited = new Set(); // Conjunto de vértices visitados
      const result = [];         // Ordem dos vértices visitados
  
      const dfs = (vertex) => {
        if (!vertex || visited.has(vertex)) return;
        visited.add(vertex);
        result.push(vertex);
  
        const neighbors = this.adjList.get(vertex) || [];
        for (const neighbor of neighbors) {
          dfs(neighbor); // Chamada recursiva para os vizinhos
        }
      };
  
      dfs(startVertex);
      return result;
    }
  
    // Busca em Profundidade (DFS) - Iterativo
    dfsIterative(startVertex) {
      const stack = [startVertex]; // Pilha para controle da ordem
      const visited = new Set();   // Conjunto de vértices visitados
      const result = [];           // Ordem dos vértices visitados
  
      while (stack.length > 0) {
        const vertex = stack.pop(); // Remove o último da pilha
  
        if (!visited.has(vertex)) {
          visited.add(vertex);
          result.push(vertex);
  
          const neighbors = this.adjList.get(vertex) || [];
          for (let i = neighbors.length - 1; i >= 0; i--) {
            stack.push(neighbors[i]); // Adiciona vizinhos à pilha
          }
        }
      }
  
      return result;
    }
  
    // Verifica ciclos em grafos direcionados usando DFS
    hasCycle() {
      const visited = new Set();
      const recStack = new Set(); // Mantém os nós no caminho atual
  
      const dfs = (vertex) => {
        if (recStack.has(vertex)) return true; // Ciclo detectado
        if (visited.has(vertex)) return false;
  
        visited.add(vertex);
        recStack.add(vertex);
  
        const neighbors = this.adjList.get(vertex) || [];
        for (const neighbor of neighbors) {
          if (dfs(neighbor)) return true;
        }
  
        recStack.delete(vertex); // Remove da pilha ao retroceder
        return false;
      };
  
      for (const vertex of this.adjList.keys()) {
        if (dfs(vertex)) return true;
      }
  
      return false; // Sem ciclos
    }
  }
  
  // Exemplo de uso
  const graph = new Graph(false); // Criando um grafo não-direcionado
  graph.addEdge('A', 'B');
  graph.addEdge('A', 'C');
  graph.addEdge('B', 'D');
  graph.addEdge('C', 'E');
  graph.addEdge('E', 'F');
  
  graph.printGraph();
  
  console.log('\nDFS Recursivo a partir do vértice A:', graph.dfsRecursive('A'));
  // Saída esperada: [ 'A', 'B', 'D', 'C', 'E', 'F' ]
  
  console.log('\nDFS Iterativo a partir do vértice A:', graph.dfsIterative('A'));
  // Saída esperada: [ 'A', 'B', 'D', 'C', 'E', 'F' ]
  
  console.log('\nO grafo contém ciclos?', graph.hasCycle());
  // Saída esperada (depende do grafo): false
  