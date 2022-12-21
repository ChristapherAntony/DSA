package BinarySearch;

public class BinaryTry {
    public static int binaryIter(int[] array, int target) {
        int startIdx = 0;
        int endIdx = array.length - 1;

        while (startIdx < endIdx) {
            int middle = startIdx + (endIdx - startIdx) / 2;
            if (array[middle] == target) {
                return middle + 1;
            } else if (array[middle] < target) {
                startIdx = middle + 1;
            } else if (array[middle] > target) {
                endIdx = middle - 1;
            }
        }
        return -1;
    }

    public static void main(String[] args) {
        int[] array = { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 };
        System.out.println(binaryIter(array, 5));
    }
    public static int binery rec    

}
