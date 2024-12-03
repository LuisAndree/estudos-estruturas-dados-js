/*
 * Representação de Grafos usando Matriz de Incidências
 */

class IncidenceMatrixGraph {
    constructor(numVertices, isDirected = false) {
      this.numVertices = numVertices; // Número de vértices
      this.isDirected = isDirected;   // Define se o grafo é direcionado
      this.matrix = [];               // Inicializa a matriz de incidências
      this.edges = [];                // Lista de arestas
    }
  
    // Adiciona uma aresta ao grafo
    addEdge(vertex1, vertex2) {
      const edgeIndex = this.edges.length; // Novo índice de aresta
      this.edges.push([vertex1, vertex2]); // Adiciona a aresta à lista
  
      // Inicializa uma nova coluna para a nova aresta
      for (let i = 0; i < this.numVertices; i++) {
        if (!this.matrix[i]) this.matrix[i] = [];
        this.matrix[i][edgeIndex] = 0;
      }
  
      // Marca as conexões para a aresta
      this.matrix[vertex1][edgeIndex] = 1;
      this.matrix[vertex2][edgeIndex] = this.isDirected ? -1 : 1;
    }
  
    // Imprime a matriz de incidências
    printMatrix() {
      console.log('Matriz de Incidências:');
      console.log('  ', this.edges.map((e, i) => `E${i}`).join(' ')); // Exibe os índices das arestas
      for (let i = 0; i < this.numVertices; i++) {
        console.log(`V${i} ${this.matrix[i].map(val => (val || 0)).join(' ')}`);
      }
    }
  }
  
  // Exemplo de uso com Grafo Não Direcionado
  console.log('Grafo Não Direcionado:');
  const undirectedGraph = new IncidenceMatrixGraph(4); // Grafo com 4 vértices
  undirectedGraph.addEdge(0, 1);
  undirectedGraph.addEdge(0, 2);
  undirectedGraph.addEdge(1, 3);
  undirectedGraph.addEdge(2, 3);
  undirectedGraph.printMatrix();
  /*
  Saída:
  Matriz de Incidências:
      E0 E1 E2 E3
  V0  1  1  0  0
  V1  1  0  1  0
  V2  0  1  0  1
  V3  0  0  1  1
  */
  
  // Exemplo de uso com Grafo Direcionado
  console.log('\nGrafo Direcionado:');
  const directedGraph = new IncidenceMatrixGraph(4, true);
  directedGraph.addEdge(0, 1);
  directedGraph.addEdge(0, 2);
  directedGraph.addEdge(1, 3);
  directedGraph.addEdge(2, 3);
  directedGraph.printMatrix();
  /*
  Saída:
  Matriz de Incidências:
      E0 E1 E2 E3
  V0  1  1  0  0
  V1 -1  0  1  0
  V2  0 -1  0  1
  V3  0  0 -1 -1
  */
  