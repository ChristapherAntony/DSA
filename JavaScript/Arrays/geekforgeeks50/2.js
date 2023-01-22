//Find minimum and maximum element in an array

function findMinMax(arr) {
    let min = arr[0]
    let max = arr[0]
    for (let i = 0; i < arr.length; i++) {
        if(arr[i]<arr[min]){
            min=arr[i]
        }
        if(arr[i]>arr[min]){
            max=arr[i]
        }
    }
    return [min,max]
}



console.log(findMinMax([1, 3, 1, 40, 60, 20]));
//   o(n)t
//   o(1)S




// function findMinMax(arr) {
//     let min = arr[0]
//     let max = arr[0]
//     let i = 1
//     while (i < arr.length) {
//         if (arr[i] < arr[min]) {
//             min = arr[i]
//         }
//         if (arr[i] > arr[min]) {
//             max = arr[i]
//         }
//         i++
//     }
//     return [min, max]
// }