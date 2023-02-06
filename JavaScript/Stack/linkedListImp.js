
class Node {
    constructor(data) {
        this.data = data
        this.next = null
    }
}
class Stack {
    constructor() {
        this.top = null
        this.size = 0
    }
    isEmpty() {
        return this.size === 0
    }
    length(){
        return this.size
    }

    push(data) {
        let newNode = new Node(data)
        if (this.isEmpty()) {
            this.top = newNode
            this.size++
            return
        }
        newNode.next = this.top
        this.top = newNode
        this.size++
    }
    arrayToStack(arr) {
        for (const i of arr) {
            this.push(i)
        }
    }
    pop() {
        if (this.isEmpty()) {
            console.log('stack is empty');
        } else {
            this.top = this.top.next
            this.size--
        }
    }
    display() {
        if (this.isEmpty()) {
            console.log('stack is empty');
        } else {
            let temp = this.top
            while (temp) {
                process.stdout.write(`${temp.data}  `)
                temp = temp.next
            }
        }
        console.log();

    }
}

let newStack = new Stack()
newStack.push(20)
newStack.push(50)

newStack.display()
newStack.pop()
newStack.arrayToStack([1,2,3,4,4,5])
newStack.display()
