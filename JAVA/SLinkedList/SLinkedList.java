// package SLinkedList;

public class SLinkedList {

    public static void main(String[] args) {
        SLinkedList list = new SLinkedList();
        

        list.addNode(10);
        list.addNode(20);
        list.addNode(30); 
        list.addNode(40);
        
        
        list.delete(30);
        list.insertAfter(40, 100);

        list.display();

    }

    // new class for node
    class Node {
        int data;
        Node next;

        Node(int data) {
            this.data = data;
        }
    }

    public Node head = null;
    public Node tail = null;

    // add values to linked list data as argument in function
    public void addNode(int data) {

        Node newNode = new Node(data);
        if (head == null) { 
            head = newNode;
        } else {
            tail.next = newNode;
        }
        tail = newNode; 
    }

    // display functions
    public void display() {
        if (head == null) {
            System.out.println("empty");
            return;
        }
        Node temp = head;
        while (temp != null) {
            System.out.println(temp.data);
            temp = temp.next;
        }
    }

    public void delete(int data){
        
        //case 1 first we need to check weather the data is head or not if head we need ot reassign head
        Node temp =head, prev=null;
        if(temp!=null && temp.data==data){
            head=temp.next;  //here we shifted the temp and the first node lost connection from the list (garbage collectors )
            return;
        }

        //case 2--data is not head so we need to find the data in the list by using a while loop

        while(temp!=null && temp.data!=data){
            prev=temp;
            temp=temp.next;
        }
        if(temp==null){
            return;
        }
        //case 3 data eq tail
        if(temp==tail){
            tail=prev; // move temp to prev node 
            tail.next=null; // make the old temp == null for delete
        }

        prev.next=temp.next;

    }

    
    // insert a data after a specific position
    public void insertAfter(int nextTo,int data){
        //boz we adding a new data -- create a new node for it
        Node newNode=new Node(data);     // will create a new node with this constructor
        Node temp =head;
        while(temp!=null && temp.data!=nextTo){
               temp=temp.next; 
        }
        if(temp==null){   // not able to find the values no need to add
            return;
        }
        if(temp==tail){
            tail.next=newNode;
            tail=newNode;
            return;
        } 
        // if the pos is between node
        newNode.next=temp.next;
        temp.next=newNode;

        
    }

    public void removeDuplicate(){
        Node current =head;
        while(current!=null){
            Node next=current.next;
            while(next!=null && next.data==current.data){
                next=next.next;
            }
            current.next=next;
            if(next==tail && current.data==next.data){
                tail=current;
                tail.next=null;
            }
            current=next;
        }
    }
}
