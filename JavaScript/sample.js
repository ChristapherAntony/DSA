
function BFS(startVertex) {
    let queue = [startVertex]

    let visited = new Set()
    
    visited.add(startVertex)
    while (queue.length > 0) {
        let currentVertex = queue.shift()
        console.log(currentVertex);

        let neighbors = this.adjancencyList.get(currentVertex)

        for (const neighbor of neighbors) {
            if (!visited.has(neighbor)) {
                visited.add(neighbor)
                queue.push(neighbor)
            }
        }
    }

}