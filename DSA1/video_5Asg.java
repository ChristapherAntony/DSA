package DSA1;

public class video_5Asg {
	public static int[] moveToEnd(int[] array, int target) {
	
		for (int i = 0; i < array.length - 1; i++) {
			if (array[i] == target) {
				for (int j = array.length - 1; j > i; j--) {
					if (array[j] != target) {
						
						array[i] += array[j];
						array[j] = array[i] - array[j];
						array[i] = array[i] - array[j];
						
					}
				}
			}
		}
			
		return array;
	}

	public static void main(String[] args) {
		int[] arr = { 6, 1, 6, 8, 10, 4, 15, 6, 3, 9, 6 };
		for (int i = 0; i < arr.length; i++) {
			System.out.print(" " + arr[i]);
		}
		System.out.println();

		int target = 6;

		int[] result = moveToEnd(arr, target);

		for (int i = 0; i < result.length; i++) {
			System.out.print(" " + result[i]);
		}
	}

}