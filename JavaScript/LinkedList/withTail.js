class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.size = 0
    }

    isEmpty() {
        return this.size === 0
    }

    getSize() {
        return this.size
    }

    print() {
        if (this.isEmpty()) {
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
    ////////////////////////// 
    prepend(value) {
        const node = new Node(value)    //First create a new node with node class
        if (this.isEmpty()) {           //head ===null
            this.head = node            //We make newly added node as head
            this.tail = node            //make tale also new node - only one node is created
        } else {
            node.next = this.head       //make next node of new node as head = to add first
            this.head = node            //make newly added node as head -added at start
        }
        this.size++                          //size increment -one node added
    }


    append(value) {                     //add to the end
        const node = new Node(value)    //create node
        if (this.isEmpty()) {
            this.head = node
        } else {
            this.tail.next = node      //link next node of tail to new node
        }
        this.tail = node               // make new node as new tail
        this.size++
    }

    removeFromFront() {
        if (this.isEmpty()) {
            return null
        }
        const value = this.head.value  // assign head to variable
        this.head = this.head.next     //make head assign to next node after head
        this.size--                    //above line will disconnect the first node from list
        return value                   //return teh deleted value
    }
    removeFromEnd() {
        if (this.isEmpty()) {
            return null
        }                                   //if head===null
        const value = this.tail.value       //for return the deleted value
        if (this.size === 1) {                  //head===tail---single node
            this.head = null
            this.tail = null
        } else {
            let prev = this.head         //iterate and get the previous node tail
            while (prev.next !== this.tail.next) { //this loop terminate when it reach tail
                console.log("helooooooooo");
                prev = prev.next
            }
        }
        this.size--
        return value
    }
    removeValue(value) {
        if (this.isEmpty()) {
            return null;
        }
        //first check value === head
        if (this.head.value === value) {
            this.head = this.head.next
            this.size--
            return value
        }
        let temp = this.head, prev;
        while (temp !== null && temp.value !== value) {
            prev = temp
            temp = temp.next
        }
        if (temp === this.tail) {
            this.tail = prev
            this.tail.next = null
            this.size--
            return value
        }
        prev.next = temp.next
        this.size--



    }
    removeIndex(index) {
        if(index<0 || index >=this.size){
            return null
        }
        let removedNode
        if(index=0){
            removedNode=this.head
            this.head=this.head.next
        }else{
            let prev=this.head
            for(let i=0; i<index-1; i++){
                prev=prev.next
            }
            removedNode=prev.next
            prev.next=removedNode.next
        }
        this.size--
        return removedNode.value


    }
    findMiddle() {
        let slow = this.head;
        let fast = this.head;
        while (fast && fast.next) {
          slow = slow.next;
          fast = fast.next.next;
        }
        return slow.value;
      }


}
const list = new LinkedList()
list.append(20)
list.append(30)
list.append(40)
list.append(100)
list.append(200)
list.append(10)
list.append(6)
list.append(6)


list.print()
console.log(list.findMiddle());
// module.exports=LinkedList