// Write a program to reverse an array 

function reverse (arr){
    let left=0
    let right=arr.length-1
    while(left<right){
        //swap
        let temp = arr[left]
        arr[left]= arr[right]
        arr[right]=temp
        //move the indices to center
        left++
        right--
    }
   return arr
}

console.log(reverse([ 1, 3, 1,40, 60,20]));
//  O(n/2)T
//   o(1)S

// O(n/2) where n is the length of the input array.