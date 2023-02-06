const insertion = (arr) => {
    for (let i = 1; i < arr.length; i++) {   // i=1 because left side will be sorted and only need to sort right side/ looping first idx to last idx
        let curr = arr[i];                   // took current pos
        let j = i - 1;
        while (j >= 0 && arr[j] > curr) {
            arr[j + 1] = arr[j];
            j--;
        }                                    // this loop exit when curr find correct pos in sub array
        arr[j + 1] = curr;
    }
    return arr;
}
let arr = [5, 4, 3, 2, 1]
insertion(arr)
console.log(arr);






























