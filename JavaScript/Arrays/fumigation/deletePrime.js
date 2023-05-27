
function deletePrime(arr) {
    const isPrime = (num) => {
        if (num <= 1) return false
        for (let i = 2; i < num; i++) {
            if (num % i === 0) return false
        }
        return true
    }
    //find prime 
    for (let i = 0; i < arr.length; i++) {
        if (isPrime(arr[i])) {
            for (let j = i; j < arr.length; j++) {
                arr[j] = arr[j + 1]
            }
            arr.length--
            i--
        }
    }
}


function deleteIdx(array, pos) {
    for (let i = pos; i < array.length; i++) {
        array[i] = array[i + 1]
    }
}


function deleteEven(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            deleteIdx(arr, i)
            arr.length--
            i--
        }
    }
}
//18. Write a program to delete all the multiples of 5 in an array.



let arr = [4, 6, 5, 3, 8, 7, 10, 11, 14, 15];
console.log(arr);
deletePrime(arr)
console.log(arr);

// deleteEven(arr)
// console.log(arr);



function isP(num){
    if(num<2) return false
    for(let i=2; i<num; i++){
        if(num%i===0) return false
    }
    return true
}