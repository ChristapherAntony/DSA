class Node {
    constructor(data, priority) {
        this.data = data
        this.priority = priority
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
    enqueue(data, priority) {
        let newNode = new Node(data, priority)
        if (this.isEmpty()) {
            this.front = this.rear = newNode
            this.size++
            return
        }
        let temp = this.front
        if (temp.priority < newNode.priority) {
            newNode.next = this.front
            this.front = newNode
        } else {
            while (temp.next !=null && temp.next.priority > priority) {
                temp = temp.next
            }
            newNode.next = temp.next
            temp.next = newNode
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
            console.log(`value = ${curr.data} , priority=${curr.priority} `);
            // process.stdout.write(`value = ${curr.data} , priority=${curr.priority} `)
            curr = curr.next
        }
        console.log();
        return this.size
    }



}

let newQueue = new LinearQueue()

newQueue.enqueue(23, 5)
newQueue.enqueue(50, 3);
newQueue.enqueue(100, 2);
// newQueue.enqueue(4);
// newQueue.enqueue(8);
newQueue.display()
// newQueue.dequeue()
// newQueue.display()