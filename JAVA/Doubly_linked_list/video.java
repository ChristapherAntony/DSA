public class video {

    public static void main(String[] args) {
        video list = new video();

        list.addNode(50);
        list.addNode(60);
        list.addNode(80);
        list.addNode(90);
        list.addNode(120);
        list.addNode(150);

        list.display();
        // System.out.println();
        // list.displayReverse();
        System.out.println();
        list.delete(150);
        list.display();


    }

    class Node {
        Node prev;
        int data;
        Node next;

        Node(int data) {
            this.data = data;
        };
    }

    public Node head = null;
    public Node tail = null;

    public void addNode(int data) {
        Node newNode = new Node(data);
        if (head == null) {
            head = newNode;
        } else {
            tail.next = newNode;
            newNode.prev = tail;
        }
        tail = newNode;
    }

    public void display() {
        if (head == null) {
            System.out.println("list is empty");
        } else {
            Node temp = head;
            while (temp != null) {
                System.out.print(" " + temp.data);
                temp = temp.next;
            }
        }
    }
    public void displayReverse() {
        if (tail == null) {
            System.out.println("list is empty");
        } else {
            Node temp = tail;
            while (temp != null) {
                System.out.print(" " + temp.data);
                temp = temp.prev;
            }
        }
    }
    public  void delete(int data){
        Node temp=head,prev=null;
        if(temp!=null && temp.data==data){
           head= temp.next; //head delete
            return;
        }
        if (temp == tail) {
            tail = temp.prev;
            tail.next = null;
           
        }

        while(temp != null && temp.data != data){
            temp=temp.next;
        }

        temp.prev = temp.next;
        temp.prev=null;
        temp.next=null;
        
        
       
    }
}
