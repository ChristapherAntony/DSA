function mergeSort(arr) {
    if (arr.length <= 1) return arr
    let middleIdx = Math.floor(arr.length / 2);
    let firstHalf = arr.slice(0, middleIdx);
    let secondHalf = arr.slice(middleIdx);
    return join(mergeSort(firstHalf), mergeSort(secondHalf));
}
function join(firstHalf, secondHalf) {
    let result = [], i = 0, j = 0;
    while (i < firstHalf.length && j < secondHalf.length) {
        if (firstHalf[i] <= secondHalf[j]) result.push(firstHalf[i++])
        else result.push(secondHalf[j++])
    }
    return [...result, ...firstHalf.slice(i), ...secondHalf.slice(j)]
}
let arr = [5, 7, 1, -4, 9, 2, -3, 11, 5, 1, 3]
// let arr = [5,4,3,2,1]
console.log(mergeSort(arr));

