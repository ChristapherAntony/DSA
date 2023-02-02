function smallest(arr) {
    let smallest = arr[0]
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < smallest) smallest = arr[i]
    }
    return smallest
}
const secondSmallest = (arr) => {
    let smallest = arr[0]
    let secondSmallest = arr[0]
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < smallest) {
            secondSmallest = smallest
            smallest = arr[i]
        } else if (arr[i] > smallest && arr[i] < secondSmallest) {
            secondSmallest = arr[i]
        }
    }
    return { smallest, secondSmallest }
}
function largest(arr) {
    let largest = arr[0]
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) largest = arr[i]
    }
    return largest
}
const secondLargest = () => {
    let largest = arr[0]
    let secondLargest = 0
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            secondLargest = largest
            largest = arr[i]
        } else if (arr[i] < largest && arr[i] > secondLargest) {
            secondLargest = arr[i]
        }
    }
    return { secondLargest, largest }
}

const thirdLargest = (arr) => {
    let l1 = -Infinity
    let l2 = -Infinity
    let l3 = -Infinity

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > l1) {
            l3 = l2
            l2 = l1
            l1 = arr[i]
        } else if (arr[i] < l1 && arr[i] > l2) {
            l3 = l2
            l2 = arr[i]
        } else if (arr[i] > l3 && arr[i] < l2) {
            l3 = arr[i]
        }
    }
    return l3
}


const thirdSmallest = (arr) => {
    let first = Infinity
    let second = Infinity
    let third = Infinity
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < first) {
            third = second
            second = first
            first = arr[i]
        } else if (arr[i] > first && arr[i] < second) {
            third = second
            second = arr[i]
        } else if (arr[i] > first && arr[i] < third) {
            third = arr[i]
        }
    }
    return third
}




function nthLargest(arr, n) {
    let copyArr = [...arr];
    for (let i = 1; i < n; i++) {
        let max = Math.max(...copyArr);
        copyArr.splice(copyArr.indexOf(max), 1);
    }
    return Math.max(...copyArr);
}

const l = (arr, n) => {
    let copyArr = [...arr]
    for (let i = 1; i < n; i++) {
        let max = Math.max(...copyArr)
        copyArr.splice(copyArr.indexOf(max), 1)
    }
}




let arr = [1, 6, 5, 3, 4, 2]

// console.log(largest(arr));
// console.log(smallest(arr));
// console.log(secondLargest(arr));
// console.log(secondSmallest(arr));
// console.log(thirdSmallest(arr));
// console.log(nthLargest(arr, 3));
// console.log(thirdLargest(arr));
// // console.log(arr);

console.log(nthLargest(arr, 3));