// 1.  find middle 
// 2. reverse second half of teh linked list
// 3. compare the 


class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    addNode(data) {
        const newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
    }

    printList() {
        let current = this.head;
        while (current) {
            console.log(current.data);
            current = current.next;
        }
    }




}

function isPalindrome(head) {
    if (head === null) {
        console.log("list is empty");
        return true
    }
    //find the middle node
    let slow = head, fast = head
    while (fast && fast.next) {
        slow = slow.next
        fast = fast.next.next
    }
    // reverse rest of the list
    let reversedSecondHalf = reverseList(slow)
    let current = head
    //compare first half of original list with reversed half
    while (reversedSecondHalf) {
        if (current.data !== reversedSecondHalf.data) return false
        current = current.next
        reversedSecondHalf = reversedSecondHalf.next
    }
    return true
}
function reverseList(head) {
    let prev = null
    let curr = head
    let next = null
    while (curr) {
        next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    head = prev
    return head
}


const myList = new LinkedList();
myList.addNode("m");
myList.addNode("a");
myList.addNode("l");
myList.addNode("l");
myList.addNode("a");
myList.addNode("m");

console.log(isPalindrome(myList.head));

