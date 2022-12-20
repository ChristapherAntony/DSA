package Stack;

public class StackTry2 {
    class Node {
        int data;
        Node next;
        Node(int data){
            this.data=data;
        }
    }
    public Node Top;
    //insert in to Stack
    public void push (int data){
        Node newNode =new Node(data);
        if(Top==null){
            Top=newNode;
        }else{
            newNode.next=Top;
            Top=newNode;
        }

    }
    public void pop(){
        if(Top==null){
            System.out.println("stack is empty");
        }else{
            Top=Top.next;
          
        }
    }
    public void Display(){
        Node current=Top;
        if(current==null){
            System.out.println("list is empty");
        }else{
            while(current!=null){
                System.out.print(current.data+" ");
                current=current.next;
            }
            System.out.println();
        }
    }
    public static void main(String[] args) {
        StackTry2 stack=new StackTry2();
        stack.Display();
        stack.push(10);
        stack.Display();
        stack.push(55);
        stack.push(88);
        stack.Display();
        stack.pop();
        stack.Display();

    }
}
