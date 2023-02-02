

let str="hello"
 
console.log(    str.slice(-1)    +    str.slice(0,str.length-1)     );

///

function ohell(str){
    let res=str[str.length-1]
    for (let i = 0; i < str.length-1; i++) {
        res+=str[i]
    }
    console.log(res);
}


ohell(str)

