package Stack;

public class Stack {

    static class Node {
        int data;
        Node next;

        Node(int data) {
            this.data = data;
        }
    }

    public Node top;

    public void Display() {
        Node current = top;
        while (current != null) {
            System.out.print(current.data + " ");
            current = current.next;
        }
    }

    public void push(int data) {
        Node newNode = new Node(data);
        if (top == null) {
            top = newNode;
        } else {
            newNode.next = top;
            top = newNode;
        }
    }

    // delete from the stack
    public void pop() {
        if (top == null) {
            System.out.println("Stack overflow");
            return;
        }
        top = top.next;
    }

    public static void main(String[] args) {
        Stack stack = new Stack();

        int[] arr = { 20, 22, 80, 60, 70, 60, 10, 80, 40, 3, 18 };
        for (int i : arr) {
            System.out.print(i + " ");
            stack.push(i);
        }
        System.out.println("array ---- stack bellow");

        stack.Display();
        stack.pop();
        System.out.println();
        stack.Display();

    }

}
