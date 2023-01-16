package Sorting;

public class SelectionSort {
    public static int[] Sort(int[] array) {
        
        for(int i=0; i<array.length-1; i++){
            int curr=i;
            for(int j=i+1; j<array.length; j++){
                if(array[j]< array[curr]){
                    array[j] =array[j]+array[curr];
                    array[curr]   =array[j]-array[curr];
                    array[j] =array[j]-array[curr];
                }

            }
            
        }
        return array;
    }

    public static void main(String[] args) {
        int[]  array={12,78,8,12,63,1,89,74,15};
        int[] res=Sort(array);
        for (int i : res) {
            System.out.print(i +" ");
        }
    }
    
    
}
