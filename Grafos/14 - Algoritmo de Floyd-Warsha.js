// Implementação do Algoritmo de Floyd-Warshall
class Graph {
    constructor(vertices) {
      this.vertices = vertices; // Número de vértices no grafo
      this.dist = Array.from({ length: vertices }, () =>
        Array(vertices).fill(Infinity)
      );
    }
  
    // Adiciona uma aresta com peso ao grafo
    addEdge(src, dest, weight) {
      this.dist[src][dest] = weight;
    }
  
    // Executa o Algoritmo de Floyd-Warshall
    floydWarshall() {
      const { vertices, dist } = this;
  
      // Inicializa a distância para zero no caso de vértices iguais
      for (let i = 0; i < vertices; i++) {
        dist[i][i] = 0;
      }
  
      // Aplica o algoritmo
      for (let k = 0; k < vertices; k++) {
        for (let i = 0; i < vertices; i++) {
          for (let j = 0; j < vertices; j++) {
            if (dist[i][k] + dist[k][j] < dist[i][j]) {
              dist[i][j] = dist[i][k] + dist[k][j];
            }
          }
        }
      }
  
      // Verifica se há ciclos negativos
      for (let i = 0; i < vertices; i++) {
        if (dist[i][i] < 0) {
          console.log("Ciclo negativo detectado!");
          return null;
        }
      }
  
      return dist;
    }
  
    // Imprime a matriz de distâncias
    printMatrix(matrix) {
      console.log("Matriz de distâncias:");
      for (const row of matrix) {
        console.log(
          row.map(value => (value === Infinity ? "∞" : value)).join("\t")
        );
      }
    }
  }
  
  // Exemplo de uso
  const vertices = 4;
  const graph = new Graph(vertices);
  
  graph.addEdge(0, 1, 5);
  graph.addEdge(0, 3, 10);
  graph.addEdge(1, 2, 3);
  graph.addEdge(2, 3, 1);
  
  const result = graph.floydWarshall();
  
  if (result) {
    graph.printMatrix(result);
  }
  // Saída esperada:
  // Matriz de distâncias:
  // 0	5	8	9
  // ∞	0	3	4
  // ∞	∞	0	1
  // ∞	∞	∞	0
  