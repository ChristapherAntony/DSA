const merge = (arr1, arr2) => {
    let arr1Length = arr1.length
    let arr2Length = arr2.length

    let i = 0
    let j = 0
    let result = []
    while (i < arr1Length && j < arr2Length) {
        if (arr1[i] < arr2[j]) {
            result.push(arr1[i])
            i++
        } else {
            result.push(arr2[j])
            j++
        }
    }
    while (i < arr1Length) {
        result.push(arr1[i])
        i++
    }
    while (j < arr2Length) {
        result.push(arr2[j])
        j++
    }
    return result;
}

const arr1 = [1, 2, 9, 20]
const arr2 = [3, 4, 12, 25]
const merged = merge(arr1, arr2);
console.log(merged); 