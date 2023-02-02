function swap(arr, i, j) {
	[arr[i],arr[j]] = [arr[j],arr[i] ]
}
function partition(arr, start, end) {
    let pivot = arr[start]
    let i = start 
    let j = end
    while (i < j) {
        while (arr[i] <= pivot) {
            i++
        }
        //right to left scan
        while (arr[j] > pivot) {
            j--
        }
        if (i < j) {
            swap(arr, i, j);
        }
    }
    swap(arr, start, j);
    return j
}


function quickSort(arr, left, right) {


    if (left < right) {
        let pivot = partition(arr, left, right)
        quickSort(arr, left, pivot - 1)
        quickSort(arr, pivot + 1, right)
    }
   
}

let arr = [10, 7, 8,8, 9, 1, 5];
let n = arr.length;

quickSort(arr, 0, n - 1);

console.log(arr);