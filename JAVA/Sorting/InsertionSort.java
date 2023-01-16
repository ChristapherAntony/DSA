package Sorting;

public class InsertionSort {
    
    public static int[] insertionSort(int[] array) {
        for(int i=1; i<=array.length-1; i++){   //i=1 because left side will be sorted and only need to sort right side/ looping first idx to last idx
            int current =array[i];  //took current pos
            int j=i-1;
            while(j>=0 && array[j] > current){
                array[j+1] = array[j];
                j--;
            }
            array[j+1] = current;
        }
        return array;
    }

    public static void main(String[] args) {
        int[]  array={12,78,8,12,63,1,89,74,15};
        int[] res=insertionSort(array);
        for (int i : res) {
            System.out.print(i +" ");
        }
    }
}






