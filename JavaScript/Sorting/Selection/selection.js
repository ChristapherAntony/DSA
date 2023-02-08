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



let arr = [5, 7, 1, -4, 9, 2, -3, 11, 5, 1, 3]
selection(arr)
console.log(arr);




