const insertion = (arr) => {
    for (let i = 0; i < arr.length ; i++) {
        for (let j = i+1; j > 0; j--) {
            if (arr[j] < arr[j - 1]) {
                [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]]   
            }
            isSorted = false
        }
    }
    return arr
}
let arr = [ 1, 2, 3, 1, 5]
insertion(arr)
console.log(arr);

