function quickSort(arr) {
    helper(arr, 0, arr.length - 1)
    return arr
}
let swap = (arr, i, j) => [arr[i], arr[j]] = [arr[j], arr[i]]

function helper(arr, startIdx, endIdx) {
    if (startIdx >= endIdx) return
    let pivot = startIdx
    let leftIdx = startIdx + 1
    let rightIdx = endIdx
    while (leftIdx <= rightIdx) {
        if (arr[leftIdx] > arr[pivot] && arr[rightIdx] < arr[pivot]) {
            swap(arr, leftIdx, rightIdx)
            leftIdx++
            rightIdx--
        }
        if (arr[leftIdx] <= arr[pivot]) {
            leftIdx++
        }
        if (arr[rightIdx] >= arr[pivot]) {
            rightIdx--
        }
    }
    swap(arr, rightIdx, pivot)
    helper(arr, startIdx, rightIdx - 1)
    helper(arr, leftIdx, endIdx)
}
let arr = [4, 4, 6, 2, 2, 9, 1]
console.log(quickSort(arr));
