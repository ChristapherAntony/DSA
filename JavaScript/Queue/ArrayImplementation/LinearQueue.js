class LinearQueue{
    constructor(){
        this.array=[]

    }
    isEmpty(){
        return this.array.length===0
    }
    size(){
        return this.array.length
    }
    peek(){
        return this.array[this.array.length-1]
    }
    enqueue(data){
        return this.array.push(data)
    }
    dequeue(){
        if(this.isEmpty())return console.log("empty");
        this.array.shift()
    }
    clear(){
        this.array=[]
    }
}

let queue = new LinearQueue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(4);
queue.enqueue(8);

console.log(queue.array);

queue.dequeue();
console.log(queue.array);

console.log(queue.peek());

console.log(queue.isEmpty());

console.log(queue.size());

queue.clear();
console.log(queue.array);