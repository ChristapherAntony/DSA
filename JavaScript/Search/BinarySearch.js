const BinarySearch = (arr, target) => {
    let start = 0
    let end = arr.length - 1
    while (start <= end) {
        let middle = Math.floor(start + (end - start) / 2)
        if(arr[middle]==target){
            return middle;
        }else if(arr[middle] > target){
            end=middle-1;
        }else if(arr[middle] < target){
            start=middle+1;
        }   
    }
    return -1;
}
let arr = [34,56,78,90,121,344,567,999]
console.log(BinarySearch(arr, 567));

