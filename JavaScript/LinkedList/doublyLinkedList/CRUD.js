class Node {
    constructor(data) {
        this.data = data
        this.next = null
        this.prev = null
    }
}
class LinkedList {
    constructor() {
        this.head = null
        this.tail = null
    }
    addArray(arr) {
        for (let i = 0; i < arr.length; i++) {
            this.append(arr[i])
        }

    }
    append(data) {
        let newNode = new Node(data)
        if (!this.head) {
            this.head = newNode
            this.tail = newNode
        } else {
            this.tail.next = newNode
            newNode.prev = this.tail
            this.tail = newNode
        }
    }

    prepend(data) {
        let newNode = new Node(data)
        if (!this.head) {
            this.head = newNode
            this.tail = newNode
        } else {
            newNode.next = this.head
            this.head.prev = newNode
            this.head = newNode
        }
    }
    deleteByValue(target) {
        if (!this.head) {
            console.log("empty list;");
        } else {
            let curr = this.head
            while (curr && curr.data === target) {
                curr = curr.next
            }
            curr.prev = curr.next
            curr = null
        }
    }
    deleteAfterTarget(target) {
        if (!this.head) {
            console.log("list is empty");
            return
        }
        if (!this.head.next) {
            console.log("nothing to delete after");
            return
        }
        let curr = this.head
        while (curr && curr.next.next && curr.data !== target) {
            curr = curr.next
        }
        if (curr.next === this.tail) {
            this.tail = curr
            this.tail.next = null
            return
        }
        if (!curr.next.next) {
            console.log("target is tail ,nothing to delete after");
            return
        }
        let temp = curr.next.next
        temp.prev = curr
        curr.next = temp
    }
    deleteBeforeTarget(target) {
        if (this.head.data === target) {
            console.log("cannot delete");
            return
        }
        if (this.head.next.data === target) {
            let forward = this.head.next
            forward.prev = null
            this.head = forward
            return
        }
        let curr = this.head
        while (curr && curr.data !== target) {
            curr = curr.next
        }
        let prev = curr.prev.prev
        prev.next = curr
        curr.prev = prev

    }



    deleteFromTail() {

    }
    deleteFromHead() {


    }
    search(target) {

    }
    display() {
        if (!this.head) {
            console.log("empty list;");
        } else {
            let curr = this.head
            while (curr) {
                process.stdout.write(`${curr.data}, `)
                curr = curr.next
            }
        }
        console.log();
    }
    printReverse() {
        let last = this.tail
        while (last) {
            process.stdout.write(`${last.data} | `)
            last = last.prev
        }
    }
    reverseList() {
        let temp=null
        let curr = this.head
        this.tail=curr
        while (curr!==null) {
            temp = curr.prev
            curr.prev = curr.next
            curr.next = temp
            curr = curr.prev
        }
        if (temp != null) {
            this.head = temp.prev;
        }
    
    }
}

let list = new LinkedList()

list.addArray([2, 5, 8, 3, 7])

list.display()
list.reverseList()
list.display()
list.append(88)


// list.prepend(77)
list.display()
