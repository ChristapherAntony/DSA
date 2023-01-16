public class LinkedList {

    /**
     * Node
     */
    public class Node {
        int data;
        Node next;

        Node(int data) {
            this.data = data;
        }
    }

    public Node head = null;
    public Node tail = null;

    // print the elements of a linked list
    // O(n)-T
    // O(1)-S
    public void Display() {
        if (head == null) {
            System.out.println("List is Empty");
            return;
        }
        Node temp = head;
        while (temp != null) {
            System.out.print(temp.data + " ");
            temp = temp.next;
        }
        System.out.println();
    }

    // insert at tail of a list
    // O(1)-TS
    public void addToList(int data) {
        Node newNode = new Node(data);
        if (head == null) {
            head = newNode;
            tail = newNode;
        } else {
            tail.next = newNode;
            tail = newNode;
        }
    }

    // insert at head of ist
    // O(1)-TS
    public void InsertAtHead(int data) {
        Node newNode = new Node(data);
        if (head == null) {
            head = newNode;
            tail = newNode;
        } else {
            newNode.next = head;
            head = newNode;
        }
    }

    // insert after a specific position
    // O(n)-T
    // O(1)-S
    public void InsertAfterPOS(int newValue, int afterValue) {
        Node newNode = new Node(newValue);
        Node temp = head;
        while (temp != null && temp.data != afterValue) {

            temp = temp.next;
        }
        if (temp == null) {
            System.out.println("not found");
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

    // insert before a specific position
    // O(n)-T
    // O(1)-S
    public void InsertAtSpecificPOS(int newValue, int POS) {
        Node newNode = new Node(newValue);
        Node temp = head, prev = null;
        while (temp != null && temp.data != POS) {
            prev = temp;
            temp = temp.next;
        }
        if (temp == null) {
            System.out.println("not found");
            return;
        }
        if (temp == head) {
            newNode.next = head.next;
            head = newNode;
            return;
        }
        if (temp == tail) {
            prev.next = newNode;
            tail = newNode;
            tail.next = null;
            return;
        }
        prev.next = newNode;
        newNode.next = temp.next;
    }

    // replace a a specific pos
    // O(n)-T
    // O(1)-S
    public void InsertBeforePOS(int newValue, int afterValue) {
        Node newNode = new Node(newValue);
        Node temp = head, prev = null;
        while (temp != null && temp.data != afterValue) {
            prev = temp;
            temp = temp.next;
        }
        if (temp == null) {
            System.out.println("not found");
            return;
        }
        if (temp == head) {
            newNode.next = head;
            head = newNode;
            return;
        }
        prev.next = newNode;
        newNode.next = temp;
    }

    // delete a node
    // O(n)=T
    // O(1)=S
    public void deleteANode(int value) {
        Node temp = head, prevNode = null;
        while (temp != null && temp.data != value) {
            prevNode = temp;
            temp = temp.next;
        }
        if (temp == null) {
            System.out.println("not value found");
            return;
        }
        if (temp == head) {
            head = temp.next;
            return;
        }
        if (temp == tail) {
            tail = prevNode;
            prevNode.next = null;
            return;
        }
        prevNode.next = temp.next;
    }

    // Print in reverse
    // O(1)=S
    // O(1)=T
    public void reverseList() {
        Node current = head;
        Node prev = null, next = null;

        while (current != null) {
            // Store next
            next = current.next;
            // Reverse current node's pointer
            current.next = prev;
            // Move pointers one position ahead.
            prev = current;
            current = next;
        }
        head = prev;

    }

    public void removeDuplicate() {
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

    public static void main(String[] args) {

        LinkedList List = new LinkedList();
        List.addToList(50);
        List.addToList(40);
        List.addToList(40);
        List.addToList(80);
        List.addToList(40);
        List.Display();
        List.removeDuplicate();
        List.Display();

    }

}
