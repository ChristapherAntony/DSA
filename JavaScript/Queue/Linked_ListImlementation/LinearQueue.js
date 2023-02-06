class Node {
    constructor(data) {
        this.data = data
        this.next = null
    }
}
class LinearQueue {
    constructor() {
        this.front = null
        this.rear = null
        this.size = 0
    }
    isEmpty() {
        return this.size === 0
    }
    length() {
        return this.size
    }
    enqueue(data) {
        let newNode = new Node(data)
        if (this.isEmpty()) {
            this.front = this.rear = newNode
        } else {
            this.rear.next = newNode
            this.rear = newNode
        }
        this.size++
    }
    dequeue() {
        if (this.isEmpty()) {
            console.log("list is empty");
            return
        }
        this.front = this.front.next
        this.size--
    }
    display() {
        if (this.isEmpty()) {
            console.log("list is empty");
            return
        }
        let curr = this.front
        while (curr) {
            process.stdout.write(`${curr.data}  `)
            curr = curr.next
        }
        console.log();
        return this.size
    }



}

let newQueue = new LinearQueue()
console.log(newQueue.isEmpty());
newQueue.enqueue(1);
newQueue.enqueue(2);
newQueue.enqueue(4);
newQueue.enqueue(8);
newQueue.display()
newQueue.dequeue()
newQueue.display()