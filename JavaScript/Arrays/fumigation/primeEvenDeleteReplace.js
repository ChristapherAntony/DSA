// Write a program to delete two elements after the occurrence of a prime number and replace all even numbers by 0.


function isPrime(num) {
    if (num < 2) return false
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false
    }
    return true
}

function deleteByIdx(arr, pos) {
    for (let i = pos; i < arr.length; i++) {
        arr[i] = arr[i + 1]
    }
}


function action(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (isPrime(arr[i])) {
            arr.splice(i + 1, 2);
        } else if (arr[i] % 2 === 0) {
            arr[i] = 0
        }
    }
}

let numbers = [1, 2, 3, 4, 5, 6];

console.log(numbers);
action(numbers)

console.log(numbers);