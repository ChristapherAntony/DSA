let swap = (arr, i, j) => [arr[i], arr[j]] = [arr[j], arr[i]]
function quickSort1(arr) {
    helper(arr, 0, arr.length - 1)
    return arr
}

function helper(arr, startIdx, endIdx) {
    if (startIdx >= endIdx) return
    let pivotIdx = startIdx
    let leftIdx = startIdx + 1
    let rightIdx = endIdx
    while (leftIdx <= rightIdx) {
        if (arr[leftIdx] > arr[pivotIdx] && arr[rightIdx] < arr[pivotIdx]) {
            swap(arr, leftIdx, rightIdx)
            leftIdx++;
            rightIdx--;
        }
        if (arr[leftIdx] <= arr[pivotIdx]) leftIdx++;
        if (arr[rightIdx] >= arr[pivotIdx]) rightIdx--;
    }
    swap(arr, rightIdx, pivotIdx)
    helper(arr, startIdx, rightIdx);
    helper(arr, leftIdx, endIdx);
}

let arr = [4, 4, 6, 2, 2, 9, 1]
console.log(quickSort1(arr));


