function swap(arr, i, j) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

function getParentIdx(i) {
    return Math.floor((i - 1) / 2);
}

function getLeftChildIdx(i) {
    return (i * 2) + 1
}

function getRightChildIdx(i) {
    return (i * 2) + 2
}

function heapifyDown(arr, idx, end) {
    let currentIdx = idx;
    let leftChildIdx = getLeftChildIdx(currentIdx);
    let rightChildIdx = getRightChildIdx(currentIdx);

    while (leftChildIdx <= end) {
        let largestChild = rightChildIdx <= end && arr[rightChildIdx] > arr[leftChildIdx]
            ? rightChildIdx
            : leftChildIdx;

        if (arr[currentIdx] < arr[largestChild]) {
            swap(arr, currentIdx, largestChild);
            currentIdx = largestChild;
            leftChildIdx = getLeftChildIdx(currentIdx);
            rightChildIdx = getRightChildIdx(currentIdx);
        } else {
            return;
        }
    }
}

function heapSort(arr) {
    const n = arr.length;
    console.log(n);
    // build heap
    for (let i = getParentIdx(n - 1); i >= 0; i--) {
        heapifyDown(arr, i, n - 1);
    }

    // sort array
    for (let end = n - 1; end > 0; end--) {
        swap(arr, 0, end);
        heapifyDown(arr, 0, end - 1);
    }
    return arr;
}

// Example usage
const arr = [5, 2, 9, 1, 5, 6];
const sortedArr = heapSort(arr);
console.log(sortedArr); // Output: [1, 2, 5, 5, 6, 9]

