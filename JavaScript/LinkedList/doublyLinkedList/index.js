//doubly linked list

class Node{
    constructor(data){
        this.data=data
        this.next=null
        this.prev=null
    }
}
class LinkedList{
    constructor(){
        this.head=null
        this.tail=null
        this.size=0
    }
    append(data){
        const newNode=new Node(data)
        if(!this.head){
            this.head=newNode
        }else{
            newNode.prev=this.tail
            this.tail.next=newNode
        }
        this.tail=newNode
        this.tail.next=null
        this.head.prev=null
        this.size++
    }
    prepend(data){
        const newNode=new Node(data)
        if(!this.head){
            console.log("pre");
            this.head=newNode
            this.tail=newNode
            this.tail.next=null
        }else{
            console.log("qqqq");
            let temp=this.head
            this.head=newNode
            this.head.next=temp
           
        }
        this.size++
    }
    display(){
        if(!this.head){
            console.log("list is empty");
        }else{
            let curr=this.head
            while(curr){
                console.log(curr.data);
                curr=curr.next
            }
        }
    }
    reverse(){
        let temp=this.head
        this.head=this.tail
        this.tail=temp
        this.tail.next=null
        this.head.prev=null
    }
}

const list=new LinkedList()
list.append(100)
list.append(200)
list.append(100)
list.append(200)
list.prepend(300)
list.display()
console.log();
list.reverse()
list.display()



console.log("list size is", list.size);