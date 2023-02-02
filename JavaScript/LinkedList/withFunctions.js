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

    add(data) {
        const newNode = new Node(data)
        if (!this.head) {
            this.head = newNode
        } else {
            this.tail.next = newNode
        }
        this.tail = newNode
        this.size++
        this.tail.next = null
    }
    print() {
        let curr = this.head
        if (curr === null) {
            console.log("list is emplty");
            return null
        }
        while (curr) {
            console.log(curr.data);
            curr = curr.next
        }
    }
}

const reverse = (head, tail) => {
    let curr = head
    let prev = null
    let next = null
    if (!curr) {
        return head
    }
    if (head === tail) {
        return head
    }
    while (curr) {
        next = curr.next
        curr.next = prev
        prev = curr
        curr = next
    }
    head = prev
    [head, tail] = [tail, head]
    return head
}

const findMiddleNode = (head) => {
    let slow = head
    let fast = head
    while (fast && fast.next) {
        slow = slow.next
        fast = fast.next.next
    }
    return slow
}

const isPalindrome=(head,tail)=>{
    const middleNode=findMiddleNode(head)
    const reversedSecondHalf=reverse(middleNode.head,tail)
    let current=head
   
    
    while (reversedSecondHalf) {
        if (current.data !== reversedSecondHalf.data) return false
        current = current.next
        reversedSecondHalf = reversedSecondHalf.next
    }
    return true
}



const list = new LinkedList()

const arr=[1,4,3,2]
arr.forEach(element => {
    list.add(element)
});

// list.print() 
// let u =isPalindrome(list.head,list.tail)
// console.log(u);

// list.print() 

let u =isPalindrome(list.head,list.tail)
console.log(u);
















//////////////////////////////////////////////////////////////////////////////sdsds///////////////////////////////////////////////////
// //latest
// const isPalindrome=(head)=>{
//     let middleNode=findMiddle(head)
//     let reversedSecondHalf=reverse(middleNode)
//     let curr=head
//     while(reversedSecondHalf){
//         if(curr.value!==reversedSecondHalf.value)return false
//         curr=curr.next
//         reversedSecondHalf=reversedSecondHalf.next
//     }
//     return true
// }

// const findMiddle=(head)=>{
//     let slow=head
//     let fast=head
//     while(fast && fast.next){
//         slow=slow.next
//         fast=fast.next.next
//     }
//     console.log(slow);
//     return slow
// }

// const reverse=(head)=>{
//     let prev=null
//     let curr=head
//     let next=null
//     while(curr){
//         next=curr.next
//         curr.next=prev
//         prev=curr
//         curr=next
//     }
//     head=prev
//     return head
// }