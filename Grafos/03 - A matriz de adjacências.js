/*
 * Representação de Grafos usando Matriz de Adjacências
 */

class AdjacencyMatrixGraph {
    constructor(numVertices, isDirected = false) {
      this.numVertices = numVertices; // Número de vértices
      this.isDirected = isDirected;   // Define se o grafo é direcionado
      this.matrix = Array.from({ length: numVertices }, () => Array(numVertices).fill(0)); // Inicializa a matriz
    }
  
    // Adiciona uma aresta ao grafo
    addEdge(vertex1, vertex2) {
      this.matrix[vertex1][vertex2] = 1; // Adiciona a conexão de vertex1 para vertex2
      if (!this.isDirected) {
        this.matrix[vertex2][vertex1] = 1; // Adiciona a conexão de vertex2 para vertex1 em grafos não direcionados
      }
    }
  
    // Remove uma aresta do grafo
    removeEdge(vertex1, vertex2) {
      this.matrix[vertex1][vertex2] = 0;
      if (!this.isDirected) {
        this.matrix[vertex2][vertex1] = 0;
      }
    }
  
    // Verifica se existe uma aresta entre dois vértices
    hasEdge(vertex1, vertex2) {
      return this.matrix[vertex1][vertex2] === 1;
    }
  
    // Imprime a matriz de adjacências
    printMatrix() {
      console.log('Matriz de Adjacências:');
      for (let row of this.matrix) {
        console.log(row.join(' '));
      }
    }
  }
  
  // Exemplo de uso com Grafo Não Direcionado
  console.log('Grafo Não Direcionado:');
  const undirectedGraph = new AdjacencyMatrixGraph(4); // Grafo com 4 vértices (0, 1, 2, 3)
  undirectedGraph.addEdge(0, 1);
  undirectedGraph.addEdge(0, 2);
  undirectedGraph.addEdge(1, 3);
  undirectedGraph.addEdge(2, 3);
  undirectedGraph.printMatrix();
  /*
  Saída:
  Matriz de Adjacências:
  0 1 1 0
  1 0 0 1
  1 0 0 1
  0 1 1 0
  */
  
  // Exemplo de uso com Grafo Direcionado
  console.log('\nGrafo Direcionado:');
  const directedGraph = new AdjacencyMatrixGraph(4, true);
  directedGraph.addEdge(0, 1);
  directedGraph.addEdge(0, 2);
  directedGraph.addEdge(1, 3);
  directedGraph.addEdge(2, 3);
  directedGraph.printMatrix();
  /*
  Saída:
  Matriz de Adjacências:
  0 1 1 0
  0 0 0 1
  0 0 0 1
  0 0 0 0
  */
  