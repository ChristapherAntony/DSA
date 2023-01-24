function peakElem(arr) {
    let peak = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > arr[i - 1] && arr[i] > arr[i + 1]) {
            peak[peak.length] = arr[i]
        }
    }
    return peak
}

const arr = [1, 3, 1, 40, 60, 20]
console.log(peakElem(arr)); 


