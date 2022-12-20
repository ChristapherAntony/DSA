public class ArrayToList {
    public static void main(String[] args) {
        int[] arr = { 6, 1, 6, 8, 10, 4, 15, 6, 3, 9, 6 };

        
        ArrayToList list =new ArrayToList();
        
        for(int i=0; i<arr.length; i++){
           list.moveToList(arr[i]);
        }
        
        System.out.println("printing list here");
        list.display();
    }

    class Node{
        int data;
        Node next;
        Node(int data){
            this.data=data;
        }

    }
    public Node head=null;
    public Node tail=null;

    public void moveToList(int data){
        Node newNode = new Node(data);
        if(head==null){
            head=newNode;
        }else{
            tail.next=newNode;
        }
        tail=newNode;
    }
    public void display(){
        if(head==null){
            System.out.println("list is empty");
        }else{
            Node temp=head;
            while(temp!=null){
                System.out.print(" "+temp.data);
                temp = temp.next;
            }
        }
    }


}
