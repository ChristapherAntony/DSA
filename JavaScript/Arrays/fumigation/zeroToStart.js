//Write a program to move all zeros to the beginning of an array.


const zeroToStart=(arr)=>{
    let x=0
    for (let i = 0; i < arr.length; i++) {
        if(arr[i]===0){
            [arr[x],arr[i]]=[arr[i],arr[x]]
            x++
        }
    }
    console.log(arr);
}

let arr=[1,4,6,0,4,0,2]

zeroToStart(arr)