class Graph {
    constructor() {
      this.adjacencyList = new Map();
    }
  
    addVertex(vertex) {
      if (!this.adjacencyList.has(vertex)) {
        this.adjacencyList.set(vertex, new Set());
      }
    }
  
    addEdge(vertex, edge) {
      if (!this.adjacencyList.has(vertex)) {
        this.addVertex(vertex);
      }
      if (!this.adjacencyList.has(edge)) {
        this.addVertex(edge);
      }
      this.adjacencyList.get(vertex).add(edge);
    }
  
    insert(vertex, edge, isBidirectional) {
      this.addEdge(vertex, edge);
      if (isBidirectional) {
        this.addEdge(edge, vertex);
      }
    }
  
    display() {
      for (let [vertex, edges] of this.adjacencyList) {
        console.log(`${vertex}: ${[...edges].join(', ')}`);
      }
    }
  }
  
  const graph = new Graph();
  
  graph.insert(1, 2, true);
  graph.insert(1, 3, true);
  graph.insert(2, 4, false);
  graph.addVertex(10)
  graph.insert(15, 10, true );
  graph.display();
  