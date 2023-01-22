// Find Subarray with given sum | Set 1 (Non-negative Numbers)

function subarraySum(arr, sum) {
    current_sum = 0
    start = 0
    for (let i = 0; i < arr.length; i++) {
        current_sum += arr[i]
        while (current_sum > sum && start <= i) {
            current_sum -= arr[start]
            start++
        }
        if (current_sum === sum) {
            console.log("Sum found between indexes " + start + " and " + i);
            return
        }
    }
    console.log("No subarray found");
}


subarraySum([1, 4, 20, 3, 10, 5], 15 )