// Count number of occurrences (or frequency) in a sorted array by given number
function countFrequency (arr,x){
    var count=0
    for(let i=0; i<arr.length; i++){
        if(arr[i]===x){
            count++
        }
    }
    return count
}

console.log(countFrequency([ 1,5,8,3,1,5,1,6,10,24,1,7,3,6,6],5));
//   o(n)t
//   o(1)S