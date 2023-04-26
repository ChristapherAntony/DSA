//singly linked list

class Node {
    constructor(data) {
        this.data = data
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null
        this.tail = null
    }
    append(value) {
        let newNode = new Node(value)
        if (!this.head) {
            this.head = this.tail = newNode
            return
        }
        this.tail.next = newNode
        this.tail = newNode
        newNode.next = null
    }
    prepend(value) {
        let newNode = new Node(value)
        if (!this.head) {
            this.head = this.tail = newNode
            return
        }
        newNode.next = this.head
        this.head = newNode
    }
    display() {
        let curr = this.head;
        if (!curr) return;
        while (curr) {
            console.log(curr.data);
            curr = curr.next;
        }
    }
    arrayToLinkedList(arr) {
        for (const i of arr) {
            this.append(i)
        }
    }
    search(tgt) {
        let curr = this.head;
        if (!curr) return null;
        while (curr) {
            if (curr.data === tgt) return curr
            curr = curr.next
        }
        return null
    }
    

}

let myList = new LinkedList()

myList.append(10)
myList.append(20)
myList.append(30)
myList.prepend(40)
myList.prepend(50)



myList.display()
