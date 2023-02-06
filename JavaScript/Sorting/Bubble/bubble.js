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
let arr = [ 1, 6, 3, 9, 5]
bubbleSort(arr)
console.log(arr);


















// const bubbleSort = (arr) => {
//     for (let i = 0; i < arr.length - 1; i++) {
//         //loop to iterate n times does not part of sorting logic -helper loop
//         //no need to last loop so -1 in length array is already sorted
//         let isSorted = true

//         for (let j = 0; j < arr.length - i - 1; j++) {
//             if (arr[j] > arr[j + 1]) {
//                 [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
//             }
//             isSorted = false
//             //compare every 2 elements from teh first to compare 
//             //end of the j loop largest elem push to end 
//             //next time no need to visit last last added index-- thats way 'i' deducting in j loop
//         }
//         if (isSorted) return
//     }
// }
// let arr = [5, 4, 3, 2, 1]
// bubbleSort(arr)
// console.log(arr);
