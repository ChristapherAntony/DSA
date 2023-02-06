function mergeSort(arr) {
    if (arr.length <= 1) return arr
    let middleIdx = Math.floor(arr.length / 2);
    let firstHalf = arr.slice(0, middleIdx);
    let secondHalf = arr.slice(middleIdx);
    return join(mergeSort(firstHalf), mergeSort(secondHalf));
}



let arr = [4, 4, 6, 2, 2, 9, 1]
// let arr = [5,4,3,2,1]
console.log(selection(arr));
