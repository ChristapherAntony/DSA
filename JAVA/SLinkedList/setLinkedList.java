
public class setLinkedList {

    public static void main(String[] args) {
        setLinkedList list = new setLinkedList();
        setLinkedList list2 = new setLinkedList();

        int[] arr = { 6, 1, 6, 8, 10, 4, 15, 6, 3, 9, 6 };
        for (int i = 0; i < arr.length; i++) {
            list.addNode(arr[i]);
        }

        list.display();
        // list.delete(6);
        // list.insertAfter(10, 88);
        list.insertBefore(10, 99);
        System.out.println("########");
        list.display();
    }

    class Node {
        int data;
        Node next;

        Node(int data) {
            this.data = data;
        }
    }
    // node class created

    public Node head = null;
    public Node tail = null;

    public void addNode(int data) {
        // Node newNode=new Node(data);
        Node newNode = new Node(data);

        if (head == null) {
            head = newNode;
        } else {
            tail.next = newNode;
        }
        tail = newNode;
    }

    public void display() {
        if (head == null) {
            System.out.print("list is empty");
        } else {
            Node temp = head;
            while (temp != null) {
                System.out.print(" " + temp.data + " ");
                temp = temp.next;
            }
        }
    }

    public void delete(int data) {
        Node temp = head, prev = null;
        if (temp != null && temp.data == data) {
            head = temp.next;
            return;
        }
        while (temp != null && temp.data != data) {
            prev = temp;
            temp = temp.next;
        }
        if (temp == tail) {
            tail = prev;
            tail.next = null;
        }
        if (temp == null) {
            return;
        }
        prev.next = temp.next;

    }

    public void insertAfter(int nextTo, int data) {
        Node newNode = new Node(data);
        Node temp = head;
        while (temp != null && temp.data != nextTo) {
            temp = temp.next;
        }
        if (temp == null) {
            return;
        }
        if (temp == tail) {
            tail.next = newNode;
            tail = newNode;
            return;
        }
        newNode.next = temp.next;
        temp.next = newNode;
    }


    public void insertBefore(int beforeTo, int data ){
        Node newNode=new Node(data);
        Node temp=head;
        while(temp!=null && temp.data!=beforeTo){
            temp=temp.next;
        }
        if(temp==null){
            return;
        }

        newNode.next=temp;
        // head=newNode;

    }

}
