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
        this.size = 0
    }
    getSize() {
        console.log();
        return this.size
    }
    addArray(arr) {
        if (arr.length <= 0) {
            console.log("array is empty");
            return
        }
        for (const i of arr) {
            this.append(i)
        }
    }
    append(data) {
        let newNode = new Node(data)
        if (!this.head) {
            this.head = this.tail = newNode
        } else {
            this.tail.next = newNode
            this.tail = newNode
        }
        this.size++
    }
    isList() {
        if (!this.head) {
            console.log("list is empty")
            return false
        }
        return true
    }
    addBefore(data) {
        let newNode = new Node(data)
        if (!this.head) {
            this.head = this.tail = this.head
        } else {
            newNode.next = this.head
            this.head = newNode
        }
        this.size++
    }
    deleteByValue(target) {
        if (this.isList()) {
            let curr = this.head
            let prevNode = null
            if (this.head.data === target) {
                this.head = this.head.next
                this.size--
                return target
            }
            while (curr && curr.data !== target) {
                prevNode = curr
                curr = curr.next
            }
            if (this.tail === curr) {
                this.tail = prevNode
                this.tail.next = null
            }
            prevNode.next = curr.next
            this.size--
            return curr.data
        }
        return null
    }
    deleteAfterTarget(target) {
        if (this.isList()) {
            let curr = this.head
            while (curr && curr.next && curr.data !== target) {
                curr = curr.next
            }
            if (!curr.next) {
                console.log("Target node not found");
                return;
            }

            let del = curr.next.data
            curr.next = curr.next.next
            this.size--
            return del
        }
        return null
    }
    deleteBeforeTarget(target) {
        if (!this.head) {
            console.log("List is empty");
            return;
        }
        let curr = this.head, prev
        if (this.head.data === target) {
            console.log("target is head cannot delete prev node");
            return null
        }
        while (curr && curr.next && curr.next.data !== target) {
            prev = curr
            curr = curr.next
        }
        if (!curr.next) {
            console.log("Target node not found");
            return;
        }
        let del = curr.data;
        curr.next = curr.next.next;
        this.size--;
        return del;
    }



    deleteFromTail() {
        if (this.isList()) {
            let curr = this.head, prev
            if (this.head === this.tail) {
                this.head = this.tail = null
                this.size--
                return curr.data
            }
            while (curr.next) {
                prev = curr
                curr = curr.next
            }
            console.log(prev.data);
            this.tail = prev
            this.tail.next = null
            this.size--
            return prev.data
        }
        return null
    }
    deleteFromHead() {
        if (this.isList()) {

        }
        return null

    }
    search(target) {
        let curr = this.head
        while (curr) {
            if (curr.data === target) return curr
            curr = curr.next
        }
        console.log("did not found");
        return null
    }
    display() {
        if (this.isList()) {
            let curr = this.head
            while (curr) {
                process.stdout.write(`${curr.data},`)
                curr = curr.next
            }
        }
        console.log();
    }
    // printReverse() {
    //     let curr = this.head
    //     if (curr === null) return;
    //     this.printReverse(curr.next);
    //     console.log(curr.data);
    // }




}


function printReverse(head) {
    if (head === null) return;
    printReverse(head.next);
    process.stdout.write(`${head.data},`)
}


const findMiddle = (head) => {
    let slow = head
    let fast = head
    while (fast && fast.next) {
        slow = slow.next
        fast = fast.next.next
    }
    return slow
}
const reverse = (head) => {
    let prev = null
    let curr = head
    let next = null

    while (curr) {
        next = curr.next
        curr.next = prev

        prev = curr
        curr = next
    }
    head = prev
    return head
}

function isPalindrome(head) {
    let middleNode = findMiddle(head)
    let reverseSecondHalf = reverse(middleNode)

    let current = head
    while (reverseSecondHalf) {
        if (current.data !== reverseSecondHalf.data) return false
        current = current.next
        reverseSecondHalf = reverseSecondHalf.next
    }
    return true
}





let list = new LinkedList()
list.addArray([1, 2, 2, 1])

list.display()
console.log(isPalindrome(list.head));


