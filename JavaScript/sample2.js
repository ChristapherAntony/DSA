

const binarySearch = (arr, target, startIdx = 0, endIdx = arr.length - 1) => {
    if (startIdx > endIdx) return -1
    let middleIdx = Math.floor()
    let middleValue=arr[middleIdx]
    if (arr[middleIdx] === target) return middleIdx
    if (arr[middleIdx] < target) {
        return binarySearch(arr, target, startIdx = middleIdx + 1, endIdx)
    } else {
        return binarySearch(arr, target, startIdx, middleIdx - 1)
    }
}





    let arr = [34, 56, 78, 90, 121, 344, 567, 999]
    console.log(binarySearch(arr, 121));


