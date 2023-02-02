//Write a program to reverse an array without using an additional array

const reverse=(arr)=>{
    for(let i=0;i<arr.length/2;i++){
        [arr[i],arr[arr.length-1-i]]=[arr[arr.length-1-i],arr[i]]
    }
}


// print in reverse order
const printRev=(arr)=>{
    for (let i = arr.length-1; i >=0 ; i--) {
        console.log(arr[i]);
    }
}




//////////////
let arr = [1,2,3,4,5,6];

console.log(arr);
// reverse(arr);
// console.log(arr);

// const reverseArray = (arr) => [...arr].slice().reverse() 
// let rev=reverseArray(arr)
// console.log(rev);

printRev(arr)