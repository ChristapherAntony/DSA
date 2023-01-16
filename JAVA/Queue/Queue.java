package Queue;

public class Queue {

    static class Node {
        int data;
        Node next;

        Node(int data) {
            this.data = data;
        }
    }

    public Node front;
    public Node rear;

    void enqueue(int data) {
        Node newNode = new Node(data);
        //check first is their any node
        if(rear==null){
            front=rear=newNode;
            return;
        }
        rear.next=newNode;
        rear=newNode;
    }

    void dequeue() {
        if(front==null){
            System.out.println("Queue is empty");
        }
        front=front.next;
        if(front==null){
            rear=null;
        }
    }

    void display() {
        Node current = front;
        if (current == null) {
            System.out.println("List is empty!");
            return;
        }
        while (current != null) {
            System.out.print(current.data + " ");
            current=current.next;
        }
        System.out.println();
    }
    public static void main(String[] args) {
        Queue queue=new Queue();
        int [] arr={20,22,80,60,70,60,10,80,40,3,18};
  




        // for (int i : arr) {
        //    System.out.print(i+" ");
        //    queue.enqueue(i);
        // }
        // System.out.println("array ---- queue bellow");
        // queue.display();
        // queue.dequeue();
        // queue.dequeue();
        // queue.dequeue();
        // queue.dequeue();
        // queue.display();
    }

}
