function swap(arr, i, j) {
    [arr[i], arr[j]] = [arr[j], arr[i]]
}

function heapifyUp(arr, idx = arr.length - 1) {
    let currentIdx = idx;
    let parentIdx = Math.floor((currentIdx - 1) / 2);

    while (currentIdx > 0 && arr[currentIdx] > arr[parentIdx]) {
        swap(arr, currentIdx, parentIdx)
        currentIdx = parentIdx;
        parentIdx = Math.floor((currentIdx - 1) / 2);
    }
}

function heapifyDown(arr, currentIdx, endIdx) {
    let leftChildIdx = 2 * currentIdx + 1;
    let rightChildIdx = 2 * currentIdx + 2;

    while (leftChildIdx <= endIdx) {
        let largestChild = rightChildIdx <= endIdx && arr[rightChildIdx] > arr[leftChildIdx]
            ? rightChildIdx
            : leftChildIdx;

        if (arr[currentIdx] < arr[largestChild]) {
            swap(arr, currentIdx, largestChild);
            currentIdx = largestChild;
            leftChildIdx = 2 * currentIdx + 1;
            rightChildIdx = 2 * currentIdx + 2;
        } else {
            return;
        }
    }
}

function heapSort(arr) {
    const n = arr.length;
    // Build max heap using heapifyUp()
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        heapifyDown(arr, i, n - 1);
    }
    // Extract maximum element and put it at the end of the array using heapifyDown()
    for (let i = n - 1; i > 0; i--) {
        swap(arr, 0, i);
        heapifyDown(arr, 0, i - 1);
    }
    return arr;
}

// Example usage
const arr = [5, 2, 9, 1, 5, 6];
const sortedArr = heapSort(arr);
console.log(sortedArr); // Output: [9, 6, 5, 5, 2, 1]
