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

function zzz(arr,sum){
    let i=0
    let t=i+1
    for ( i = 0; i < arr.length; i++) {
       
            if(arr[i]+ arr[t]== sum){
                console.log(arr[i]+ "+" +arr[t])
            }
        t++
    }
}

var arr=[2, 4, 1, 3, 10, 5,10,5]
var sum = 6
subarraySum(arr,sum);