class Graph {
    constructor() {
        this.vertices = new Map(); // a hash map to store vertices and their adjacency lists
    }

    addVertex(vertex) {
        if (!this.vertices.has(vertex)) {
            this.vertices.set(vertex, []); // initialize an empty adjacency list for the vertex
        }
    }

    addEdge(vertex1, vertex2) {
        this.addVertex(vertex1);
        this.addVertex(vertex2);
        // add vertex2 to vertex1's adjacency list, and vice versa
        this.vertices.get(vertex1).push(vertex2);
        this.vertices.get(vertex2).push(vertex1);
    }

    removeVertex(vertex) {
        if (this.vertices.has(vertex)) {
            // remove the vertex from its adjacent vertices' adjacency lists
            const adjacentVertices = this.vertices.get(vertex);
            for (const adjacentVertex of adjacentVertices) {
                const adjacentVertexAdjacencyList = this.vertices.get(adjacentVertex);
                adjacentVertexAdjacencyList.splice(adjacentVertexAdjacencyList.indexOf(vertex), 1);
            }
            // delete the vertex and its adjacency list from the hash map
            this.vertices.delete(vertex);
        }
    }

    removeEdge(vertex1, vertex2) {
        if (this.vertices.has(vertex1) && this.vertices.has(vertex2)) {
            // remove vertex2 from vertex1's adjacency list, and vice versa
            const vertex1AdjacencyList = this.vertices.get(vertex1);
            const vertex2AdjacencyList = this.vertices.get(vertex2);
            vertex1AdjacencyList.splice(vertex1AdjacencyList.indexOf(vertex2), 1);
            vertex2AdjacencyList.splice(vertex2AdjacencyList.indexOf(vertex1), 1);
        }
    }

    getAdjacentVertices(vertex) {
        if (this.vertices.has(vertex)) {
            return this.vertices.get(vertex);
        }
    }

    getAllVertices() {
        return Array.from(this.vertices.keys());
    }
    display() {
        for (const [vertex, adjacencyList] of this.vertices) {
            console.log(`${vertex} -> ${adjacencyList.join(', ')}`);
        }
    }
}
