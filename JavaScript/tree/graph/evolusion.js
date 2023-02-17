class Graph {
    constructor() {
        this.adjacencyList = {};
    }
    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {

            this.adjacencyList[vertex] = new Set()
        }
    }
    addEdge(v1, v2) {
        if (!this.adjacencyList[v1]) {
            this.addVertex(v1)
        }
        if (!this.adjacencyList[v2]) {
            this.addVertex(v2)
        }
        this.adjacencyList[v1].add(v2)
        this.adjacencyList[v2].add(v1)
    }
    hasEdge(v1,v2){
        return(
            this.adjacencyList[v1].has(v2) &&
            this.adjacencyList[v2].has(v1)
        )
    }
    removeVertex(vertex){
        if(!this.adjacencyList[vertex]) return
        for(let adjacentVertex of this.adjacencyList[vertex]){
            this.removeEdge(vertex,adjacentVertex)
        }
        delete this.adjacencyList[vertex]
    }
    removeEdge(v1,v2){
        this.adjacencyList[v1].delete(v2)
        this.adjacencyList[v2].delete(v1)    //delete a built in method in set
    }

    display() {
        for (let vertex in this.adjacencyList) {
            console.log(vertex + "->" + [...this.adjacencyList[vertex]]);

        }
    }
}

const graph = new Graph()

graph.addVertex("A")
graph.addVertex("B")
graph.addVertex("C")
graph.addEdge("A", "B")
graph.addEdge("B", "C")

graph.display()

console.log(graph.hasEdge("A","B"));
console.log(graph.hasEdge("A","C"));
graph.removeVertex("B")

graph.display()