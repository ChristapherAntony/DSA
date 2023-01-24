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
}
var addTwoNumbers = function(l1, l2) {
    let t1=l1.head
    let t2=l2.head
    let total1=0
    let total2=0
    while(t1 && t2){
        total1+=t1.value
        total2+=t2.value
        t1=t1.next
        t2=t2.next
    }
    console.log(total1,"qq",total2);
    let sum=total1+total2
    console.log(sum);

    
};



const l1 = new LinkedList()
l1.append(1)
l1.append(2)
l1.append(3)


const l2 = new LinkedList()
l2.append(1)
l2.append(2)
l2.append(3)

l1.print()
l2.print()
addTwoNumbers(l1,l2)


