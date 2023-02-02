//bubble sorting
function bubble(arr) {
    console.log("bubble");
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                // [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
            }
        }
    }
    return arr
}
function selection(arr) {

    for (let i = 0; i < arr.length - 1; i++) {
        let c = i
        for (let j = i; j < arr.length; j++) {
            if (arr[j] < arr[c]) {
                let temp = arr[c]
                arr[c] = arr[j]
                arr[j] = temp
            }
        }
    }
    return arr
}

console.log(selection([1, 3, 1, 40, 60, 20]));
//   o(n)t
//   o(1)S