const BinarySearch = (arr, target) => {
    let start = 0
    let end = arr.length - 1
    while (start <= end) {
        let middle = Math.floor(start + (end - start) / 2)
        if (arr[middle] == target) {
            return middle;
        } else if (arr[middle] > target) {
            end = middle - 1;
        } else if (arr[middle] < target) {
            start = middle + 1;
        }
    }
    return -1;
}





const recursiveSearch = (arr, target) => {
    return helper(arr, target, 0, arr.length - 1)
}

const helper = (arr, target, start, end) => {
    if (start > end) return -1;
    let middle = Math.floor(start + (end - start) / 2)
    if (arr[middle] === target) {
        return middle
    } else if (arr[middle] > target) {
        return helper(arr, target, start, middle - 1)
    } else if (arr[middle] < target) {
        return helper(arr, target, middle + 1, end)
    }
    return -1
}

let arr = [34, 56, 78, 90, 121, 344, 567, 999]
console.log(BinarySearch(arr, 991));
// console.log(recursiveSearch(arr, 34));
