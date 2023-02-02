package BinarySearch;

public class BinarySearch {
    public static int binaryIter(int[] array , int target){
        int startIdx=0;
        int endIdx=array.length-1;
        while(startIdx<=endIdx){
            int middle=startIdx +(endIdx-startIdx)/2;   //to find the middle
            //next check if the middle is the target
            if(array[middle]==target){
                return middle;
            }else if(array[middle] > target){
                endIdx=middle-1;
            }else if(array[middle] < target){
                startIdx=middle+1;
            }
        }
        return -1;
    }

    ///////////////////////////////////////////////////////////////////////////////////////
    public static int binaryRec(int[] array , int target){
        return binaryRecHelper(array, target, 0, array.length-1);
    }
    public static int binaryRecHelper(int[] array , int target,int startIdx, int endIdx){
        if(startIdx>endIdx){
            return -1;
        }
        int middle=startIdx +(endIdx-startIdx)/2;
        if(array[middle]==target){
            return middle;
        }else if(array[middle] > target){
            return binaryRecHelper(array, target, 0, middle-1);
        }else if(array[middle] < target){
            return binaryRecHelper(array, target, middle+1, endIdx);
        }

        return 1;
    }
    ////////////////////////////////////////////////////////////////////////////////////////
    public static void main(String[] args) {
        // int [] array={2,5,8,2,4,56,45,23,9};
        int [] array={1,2,3,4,5,6,7,8,9,10};
        System.out.println(binaryIter(array, 1000));
        // System.out.println(binaryRec(array, 5));
       
    }
    
}
