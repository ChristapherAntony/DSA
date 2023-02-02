function getTargetElements(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    while (left < right) {
        let sum = arr[left] + arr[right];
        if (sum === target) {
            console.log("Elements:", arr[left], arr[right]);
            return;
        } else if (sum < target) {
            left++;
        } else {
            right--;
        }
    }
}

// function getTargetElements(arr, target) {
//   arr.sort((a, b) => a - b);
//   let left = 0;
//   let right = arr.length - 1;
//   while (left < right) {
//     let sum = arr[left] + arr[right];
//     if (sum === target) {
//       console.log("Elements:", arr[left], arr[right]);
//       return;
//     } else if (sum < target) {
//       left++;
//     } else {
//       right--;
//     }
//   }
// }



let arr = [6, 2, 7, 4, 1];
let target = 5;
getTargetElements(arr, target);
