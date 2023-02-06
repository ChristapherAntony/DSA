const bubbleSort = (arr) => {
    for (let i = 0; i < arr.length - 1; i++) {
        let isSorted = true
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
                isSorted = false
            }
        }
        if (isSorted) return
    }
    return arr
}
const selection = (arr) => {
    for (let i = 0; i < arr.length ; i++) {
        let minIdx = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIdx]) {
                [arr[minIdx], arr[j]] = [arr[j], arr[minIdx]]
            }
        }
    }
}