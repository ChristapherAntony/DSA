package Sorting;

public class BubbleSort {
    public static int[] Sort(int[] arr) {

        for (int i = 0; i < arr.length - 1; i++)
            for (int j = 0; j < arr.length - i - 1; j++)
                if (arr[j] > arr[j + 1]) {
                    arr[j+1] =arr[j+1]+arr[j];
                    arr[j]   =arr[j+1]-arr[j];
                    arr[j+1] =arr[j+1]-arr[j];
                }
        return arr;
    }

    public static void main(String[] args) {
        int[] array = { 12, 78, 8, 12, 63, 1, 89, 74, 15 };
        int[] res = Sort(array);
        for (int i : res) {
            System.out.print(i + " ");
        }
    }

}
