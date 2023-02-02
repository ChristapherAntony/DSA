//Write a program to print all unique elements in an array.

const findUnique = (arr) => {
    let res = []
    for (let i = 0; i < arr.length; i++) {
        let count = 0
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] === arr[j] && i !== j) count++
        }
        if (count === 0) res.push(arr[i])
    }
    return res
}
// const findUnique2 = (arr) => {
//     let res = new Set()
//     for (let i = 0; i < arr.length; i++) {
//        res.add(arr[i])
//     }
//     return res
// }



const printUnique = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        let count = 0
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] === arr[j] && i !== j) count++
        }
        if (count === 0){
            console.log(arr[i]);
        }
    }
    
}


let arr = [1, 2, 3, 2, 5, 3, 9];
printUnique(arr)