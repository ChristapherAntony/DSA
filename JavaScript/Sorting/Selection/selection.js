const selection = (arr) => {

    for (let i = 0; i < arr.length - 1; i++) {

        let curr = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[curr]) {
                
                [arr[curr], arr[j]] = [arr[j], arr[curr]]
            }
        }
    }
}
let arr = [5, 4, 3, 2, 1]
selection(arr)
console.log(arr);




