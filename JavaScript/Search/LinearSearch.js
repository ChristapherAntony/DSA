let arr = [23, 345, 6, 12, 67, 45, 89]

const LinearSearch = (arr, target) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) return i
    }

    return -1
    
}


console.log(LinearSearch(arr, 23));