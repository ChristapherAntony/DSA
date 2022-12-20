package Queue;

public class Queue2 {
    class Node {
        int data;
        Node next;
        Node(int data){
            this.data=data;
        }
    }
    public Node front;
    public Node rear;

    public void Enqueue(int data){
        Node newNode=new Node(data);
        if(front==null){
            front=rear=newNode;
        }else{
            rear.next=newNode;
            rear=newNode;
        }
    }
    public void Dequeue(){
        if(front==null){
            System.out.println("Queue is empty");
        }
        front=front.next;
        if(front==null){
            rear=null;
        }
        

    }
    public void Display(){
        Node current=front;
        if(current==null){
            System.out.println("empty");
            return;
        }
        while(current!=null){
            System.out.print(current.data+" ");
            current=current.next;
        }
        System.out.println();
    }
    public static void main(String[] args) {
        Queue2 hello=new Queue2();

        hello.Display();
        hello.Enqueue(100);
        hello.Enqueue(200);
        hello.Display();
        hello.Dequeue();
        hello.Display();
    }
    
}
