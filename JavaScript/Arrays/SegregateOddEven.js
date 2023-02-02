//Segregate even and odd numbers
//even numbers should be present first, and then the odd numbers.




const Segregate = (arr) => {
    let x = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            [arr[x], arr[i]] = [arr[i], arr[x]]
            x++
        }
    }
}


let arr = [1, 3, 2, 4, 7, 6, 9, 10];

Segregate(arr)
console.log(arr);