function x(str){
    let arr=[]
    for (let i = 0; i < str.length; i++) {
        let n=str.charCodeAt(i)
        arr.push(n)
    }   
    console.log(arr);
}


let str="hfrfhkjsd"
x(str)