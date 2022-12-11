package SLinkedList;

public class SLinkedList {
    class Node {
        int data;
        Node next;

        Node(int data) {
            this.data = data;
        }
    }

    public Node head = null;
    public Node tail = null;

    public void addNode(int data) {
        Node newNode = new Node(data);

        if (head == null) {
            head = newNode;
        } else {
            tail.next = newNode;
        }
        tail = newNode;

        System.out.println("new node added");
    }

    public void display() {
        if (head == null) {
            System.out.println("empty");
            return;
        }

        Node temp = head;

        while (head != null) {
            System.out.println(temp.data);
            temp = temp.next;
        }

    }

    public static void main(String[] args) {
        SLinkedList list =new SLinkedList();
        list.display();

        list.addNode(10);
        list.addNode(10);
        list.addNode(10);
        list.addNode(10);
        list.display();
    
         
    }

}


