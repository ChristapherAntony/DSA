// Print the Middle of a given linked list

class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class linkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.size = 0
    }
    append(value) {                     //add to the end
        const node = new Node(value)    //create node
        if (this.head === null) {
            this.head = node
        } else {
            this.tail.next = node      //link next node of tail to new node
        }
        this.tail = node               // make new node as new tail

    }
    print() {
        if (this.head === null) {
            console.log("list is empty");
        } else {
            let curr = this.head;
            let listValue = ''
            while (curr) {
                listValue += `${curr.value} `
                curr = curr.next
            }
            console.log(listValue);
        }
    }

    reverse() {
        let prev = null
        let curr = this.head
        while (curr) {
            let nextNode = curr.next
            curr.next = prev
            prev = curr
            curr = nextNode
            
        }
        this.head = prev;
        [this.head, this.tail] = [this.tail, this.head]
    }
}


const list = new linkedList()
list.append(20)
list.append(30)
list.append(40)
list.append(100)
list.append(200)
list.append(10)
list.append(6)
list.append(8)
list.print()
list.reverse()
list.print()
list.append(6)
list.append(8)
list.print()