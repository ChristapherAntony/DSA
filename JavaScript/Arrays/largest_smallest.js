

function largest(arr) {
    let largest = arr[0]
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) largest = arr[i]
    }
    return largest
}
function smallest(arr) {
    let smallest = arr[0]
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < smallest) smallest = arr[i]
    }
    return smallest
}
const secondLargest = () => {
    let largest = arr[0]
    let secondLargest = 0
    for (let i = 1; i < arr.length; i++) {
        if(arr[i]>largest){
            secondLargest=largest
            largest=arr[i]
        }else if(arr[i]<largest && arr[i]>secondLargest){
            secondLargest=arr[i]
        }
    }
    return {secondLargest,largest}
}
const secondSmallest=(arr)=>{
    let smallest=arr[0]
    let secondSmallest=arr[0]
    for(let i=0;i<arr.length;i++){
        if(arr[i]<smallest){
            secondSmallest=smallest
            smallest=arr[i]
        }else if(arr[i]>smallest && arr[i]<secondSmallest){
            secondSmallest=arr[i]
        }
    }
    return {smallest,secondSmallest}
}



let arr = [ 1,100, 56, 23, 7, 23, 99, 23, 56, 34, 67, 2]

console.log(largest(arr));
console.log(smallest(arr));
console.log(secondLargest(arr));
console.log(secondSmallest(arr));