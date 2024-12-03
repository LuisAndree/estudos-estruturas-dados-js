/*
 * Classe genérica Graph para representar Grafos
 */

class Graph {
    constructor(numVertices = 0, isDirected = false, representation = 'adjList') {
      this.numVertices = numVertices;  // Número de vértices
      this.isDirected = isDirected;    // Define se o grafo é direcionado
      this.representation = representation; // Tipo de representação: adjList, adjMatrix, incMatrix
      this.structure = this.initializeStructure(); // Estrutura de dados para representação
    }
  
    // Inicializa a estrutura de dados com base na representação escolhida
    initializeStructure() {
      switch (this.representation) {
        case 'adjMatrix':
          return Array.from({ length: this.numVertices }, () =>
            Array(this.numVertices).fill(0)
          );
        case 'incMatrix':
          return { matrix: [], edges: [] };
        case 'adjList':
        default:
          return new Map();
      }
    }
  
    // Adiciona um vértice
    addVertex(vertex) {
      if (this.representation === 'adjList' && !this.structure.has(vertex)) {
        this.structure.set(vertex, []);
      }
    }
  
    // Adiciona uma aresta
    addEdge(vertex1, vertex2) {
      if (this.representation === 'adjList') {
        if (!this.structure.has(vertex1)) this.addVertex(vertex1);
        if (!this.structure.has(vertex2)) this.addVertex(vertex2);
        this.structure.get(vertex1).push(vertex2);
        if (!this.isDirected) {
          this.structure.get(vertex2).push(vertex1);
        }
      } else if (this.representation === 'adjMatrix') {
        this.structure[vertex1][vertex2] = 1;
        if (!this.isDirected) {
          this.structure[vertex2][vertex1] = 1;
        }
      } else if (this.representation === 'incMatrix') {
        const edgeIndex = this.structure.edges.length;
        this.structure.edges.push([vertex1, vertex2]);
        for (let i = 0; i < this.numVertices; i++) {
          if (!this.structure.matrix[i]) this.structure.matrix[i] = [];
          this.structure.matrix[i][edgeIndex] = 0;
        }
        this.structure.matrix[vertex1][edgeIndex] = 1;
        this.structure.matrix[vertex2][edgeIndex] = this.isDirected ? -1 : 1;
      }
    }
  
    // Imprime a estrutura do grafo
    printGraph() {
      if (this.representation === 'adjList') {
        console.log('Lista de Adjacências:');
        for (let [vertex, edges] of this.structure.entries()) {
          console.log(`${vertex} -> ${edges.join(', ')}`);
        }
      } else if (this.representation === 'adjMatrix') {
        console.log('Matriz de Adjacências:');
        for (let row of this.structure) {
          console.log(row.join(' '));
        }
      } else if (this.representation === 'incMatrix') {
        console.log('Matriz de Incidências:');
        console.log('  ', this.structure.edges.map((_, i) => `E${i}`).join(' '));
        for (let i = 0; i < this.numVertices; i++) {
          console.log(`V${i} ${this.structure.matrix[i].map(val => (val || 0)).join(' ')}`);
        }
      }
    }
  }
  
  // Exemplo de uso
  const graph = new Graph(4, false, 'adjList');
  graph.addEdge(0, 1);
  graph.addEdge(0, 2);
  graph.addEdge(1, 3);
  graph.addEdge(2, 3);
  graph.printGraph();
  
  const graphMatrix = new Graph(4, false, 'adjMatrix');
  graphMatrix.addEdge(0, 1);
  graphMatrix.addEdge(0, 2);
  graphMatrix.addEdge(1, 3);
  graphMatrix.addEdge(2, 3);
  graphMatrix.printGraph();
  
  const graphIncMatrix = new Graph(4, true, 'incMatrix');
  graphIncMatrix.addEdge(0, 1);
  graphIncMatrix.addEdge(0, 2);
  graphIncMatrix.addEdge(1, 3);
  graphIncMatrix.addEdge(2, 3);
  graphIncMatrix.printGraph();
  