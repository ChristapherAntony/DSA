// stack array 
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
    push(data) {
        const newNode = new Node(data)
        if (this.top == null) {
            this.top = newNode
        } else {
            newNode.next = this.top
            this.top = newNode
        }
        this.size++
    }
    pop() {
        if (this.top == null) {
            console.log("stack is underFlow");
            return
        }
        this.top = this.top.next
        this.size--
    }
    midValue(){
        let slow=this.top
        let fast=this.top
        while(fast && fast.next){
            fast=fast.next.next
            slow=slow.next
        }
        return slow.data
    }
    display() {
        let temp = this.top
        if (temp === null) {
            console.log("stack underflow");
            return
        }
        while (temp) {
            console.log(temp.data);
            temp = temp.next
        }
    }
}

let stack = new Stack()
stack.push(100)
stack.push(200)
stack.push(300)
stack.push(400)
stack.push(500)
console.log(stack.midValue());


