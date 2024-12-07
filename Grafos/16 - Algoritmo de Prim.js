// Classe para representar um grafo
class Graph {
    constructor(vertices) {
      this.vertices = vertices; // Número de vértices no grafo
      this.adjList = new Map(); // Lista de adjacências
    }
  
    // Adiciona uma aresta ao grafo
    addEdge(src, dest, weight) {
      if (!this.adjList.has(src)) this.adjList.set(src, []);
      if (!this.adjList.has(dest)) this.adjList.set(dest, []);
      this.adjList.get(src).push({ node: dest, weight });
      this.adjList.get(dest).push({ node: src, weight }); // Grafo não direcionado
    }
  
    // Algoritmo de Prim
    primMST() {
      const key = Array(this.vertices).fill(Infinity); // Pesos mínimos
      const parent = Array(this.vertices).fill(-1); // Pais na MST
      const inMST = Array(this.vertices).fill(false); // Vértices incluídos na MST
  
      key[0] = 0; // Começa do vértice 0
  
      for (let count = 0; count < this.vertices - 1; count++) {
        // Seleciona o vértice com o menor peso ainda não incluído na MST
        let min = Infinity;
        let u = -1;
        for (let v = 0; v < this.vertices; v++) {
          if (!inMST[v] && key[v] < min) {
            min = key[v];
            u = v;
          }
        }
  
        // Inclui o vértice na MST
        inMST[u] = true;
  
        // Atualiza os pesos e pais dos vértices adjacentes
        const neighbors = this.adjList.get(u) || [];
        for (const { node, weight } of neighbors) {
          if (!inMST[node] && weight < key[node]) {
            key[node] = weight;
            parent[node] = u;
          }
        }
      }
  
      // Construir a MST a partir do array parent
      const mst = [];
      for (let i = 1; i < this.vertices; i++) {
        mst.push({ src: parent[i], dest: i, weight: key[i] });
      }
      return mst;
    }
  }
  
  // Exemplo de uso
  const graph = new Graph(5);
  graph.addEdge(0, 1, 2);
  graph.addEdge(0, 3, 6);
  graph.addEdge(1, 2, 3);
  graph.addEdge(1, 3, 8);
  graph.addEdge(1, 4, 5);
  graph.addEdge(2, 4, 7);
  graph.addEdge(3, 4, 9);
  
  const mst = graph.primMST();
  
  console.log("Árvore de Extensão Mínima:");
  for (const edge of mst) {
    console.log(`Aresta ${edge.src} - ${edge.dest} com peso ${edge.weight}`);
  }
  // Saída esperada:
  // Aresta 0 - 1 com peso 2
  // Aresta 1 - 2 com peso 3
  // Aresta 1 - 4 com peso 5
  // Aresta 0 - 3 com peso 6
  