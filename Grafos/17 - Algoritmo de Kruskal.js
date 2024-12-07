// Classe para representar uma aresta
class Edge {
    constructor(src, dest, weight) {
      this.src = src;
      this.dest = dest;
      this.weight = weight;
    }
  }
  
  class Graph {
    constructor(vertices) {
      this.vertices = vertices; 
      this.edges = []; 
    }
  
    addEdge(src, dest, weight) {
      this.edges.push(new Edge(src, dest, weight));
    }
  
    find(parent, vertex) {
      if (parent[vertex] !== vertex) {
        parent[vertex] = this.find(parent, parent[vertex]);
      }
      return parent[vertex];
    }
  
    union(parent, rank, x, y) {
      const xRoot = this.find(parent, x);
      const yRoot = this.find(parent, y);
  
      if (rank[xRoot] < rank[yRoot]) {
        parent[xRoot] = yRoot;
      } else if (rank[xRoot] > rank[yRoot]) {
        parent[yRoot] = xRoot;
      } else {
        parent[yRoot] = xRoot;
        rank[xRoot]++;
      }
    }
  
    kruskalMST() {
      const result = []; 
      const parent = []; 
      const rank = []; 
  
      for (let i = 0; i < this.vertices; i++) {
        parent[i] = i;
        rank[i] = 0;
      }
  
      this.edges.sort((a, b) => a.weight - b.weight);
  
      for (const edge of this.edges) {
        const x = this.find(parent, edge.src);
        const y = this.find(parent, edge.dest);
  
        if (x !== y) {
          result.push(edge);
          this.union(parent, rank, x, y);
        }
      }
  
      return result;
    }
  }
  
  const graph = new Graph(4);
  graph.addEdge(0, 1, 10);
  graph.addEdge(0, 2, 6);
  graph.addEdge(0, 3, 5);
  graph.addEdge(1, 3, 15);
  graph.addEdge(2, 3, 4);
  
  const mst = graph.kruskalMST();
  
  console.log("Árvore de Extensão Mínima:");
  for (const edge of mst) {
    console.log(`Aresta ${edge.src} - ${edge.dest} com peso ${edge.weight}`);
  }

  