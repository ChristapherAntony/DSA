//How to merge two unsorted arrays in sorted order ?

function mergeAndSort(arr1, arr2) {
    for (let i = 0; i < arr2.length; i++)arr1.push(arr2[i])
    for (var i = 0; i < arr1.length; i++) {
        for (var j = 0; j < arr1.length-i-1; j++) {
            if (arr1[j] > arr1[j+1]) {
                [arr1[j], arr1[j + 1]] = [arr1[j + 1], arr1[j]]
            }
        }
    }
    

}







let arr1 = [2, 4, 6, 2, 6, 9, 1]
let arr2 = [5, 9, 2, 6, 8]
// mergeAndSort(arr1, arr2)
// console.log(arr1);

console.log(mergeAndSort2(arr1,arr2));