package PriorityQueue;

public class PQwithLinkedList {
    class Node {
        int data;
        int priority;
        Node next;

        Node(int data, int priority) {
            this.data = data;
            this.priority = priority;
        }

    }

    public Node head;

    public void push(int data, int p) {
        Node newNode = new Node(data, p);
        Node temp = null;
        if (head == null) {
            newNode.next = null;
            head = newNode;
            return;
        }
        temp = head;
        System.out.println(temp.data + "headdddddddddddddd");
        if (temp.priority < p) {
            newNode.next = temp;
            head = newNode;
        } else {
            while (temp.next != null && temp.next.priority > p) {
                temp = temp.next;
            }
            newNode.next = temp.next;
            temp.next = newNode;
        }

    }

    public void pop() {
        Node temp = head;
        if (head == null) {
            System.out.println("empty");
            return;
        } else {
            System.out.println(
                    "removed node--------------" + "value =" + temp.next.data + " priority =" + temp.next.priority);
            head = temp.next;
        }

    }

    public void Display() {
        Node temp = head;
        if (temp == null) {
            System.out.println("empty");
            return;
        }
        while (temp != null) {
            System.out.println("value =" + temp.data + " priority =" + temp.priority);
            temp = temp.next;
        }
    }

    public static void main(String[] args) {
        PQwithLinkedList newPQ = new PQwithLinkedList();
        newPQ.push(50, 4);
        newPQ.push(30, 5);
        newPQ.push(500, 2);
        newPQ.push(18, 1);
        newPQ.push(60, 3);
        newPQ.Display();
        System.out.println("next to pop out the value");
        newPQ.pop();
        newPQ.pop();
        newPQ.Display();
    }

}
