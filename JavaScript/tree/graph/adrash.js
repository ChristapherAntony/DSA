class Grapgh{
    constructor(){
        this.adjacencyList={};
    }

    addVertex(vertex){
        if(!this.adjacencyList[vertex]){

            this.adjacencyList[vertex]=[]; 
        }
    }

    addEdge(v1,v2){
         this.adjacencyList[v1].push(v2);
         this.adjacencyList[v2].push(v1);
    }

    removeEdge(v1,v2){
        this.adjacencyList[v1]=this.adjacencyList[v1].filter(
            v=>v!==v2
        )
        this.adjacencyList[v2]=this.adjacencyList[v2].filter(
            v=>v!==v1
        )
    }

    debthFirstSearch(start){
       const stack=[start];
       const result=[];
       const visited={};
       visited[start]=true;
       let currentVertex
       while(stack.length){
       currentVertex=stack.pop();
        result.push(currentVertex);

        this.adjacencyList[currentVertex].forEach(neighbor => {
            if(!visited[neighbor]){
                visited[neighbor]=true;
                stack.push(neighbor)
            }
        });
       }
       return result
    }
}

const g=new Grapgh();
g.addVertex("tokyo");
g.addVertex("malasia");
g.addVertex("luthiyana");
g.addVertex("SanFransisco")


g.addEdge("tokyo","malasia")
g.addEdge("malasia","luthiyana")
g.addEdge("tokyo","SanFransisco")
console.log(g.debthFirstSearch("tokyo"))