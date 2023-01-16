public class sample {
    public static void main(String[] args) {
        sample list=new sample();
        list.addToList(25);
        list.addToList(35);
        list.addToList(85);
        list.addToList(55);

        list.display();

       
    }

    class Node{
        Node prev;
        int data;
        Node next;

        Node(int data){
            this.data=data;
        }
    }

    public Node head =null;
    public Node tail =null;

    public void addToList(int data){

        Node newNode=new Node(data);

        if(head==null){
            head=newNode;
        }else{
            tail.next=newNode;
            
           
        }
        tail=newNode;
        // tail.next=head;
    }
    public void display(){
        if(head==null){
            System.out.println("list is empty");
        }else{
            Node temp= head;
            int num=0;
            while(temp!=null){
                System.out.println(temp.data);
                temp=temp.next;

            }
        }
    }

       

    
}
