// function pushZerosToEnd(arr) {
//     let nonZeroIndex = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] !== 0) {
//             [arr[i], arr[nonZeroIndex]] = [arr[nonZeroIndex], arr[i]];
//             nonZeroIndex++;
//         }
//     }
//     return arr;
// }
function pushZerosToEnd(arr) {
  let nonZero = 0
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      [arr[nonZero], arr[i]] = [arr[i], arr[nonZero]]
      nonZero++
    }
  }
  console.log(arr);
  return arr;
}






//////////////
// let arr = [1, 9, 8, 4, 0, 0, 2, 7, 0, 6, 0, 9];
let arr = [1, 0, 4, 0, 5];

console.log(arr);
shift(arr);
console.log(arr);
