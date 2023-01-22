function f(n) {
    console.log(n);
    if (n <= 1) {
        return 1
    }

    return n* f(n - 1)
}



console.log(f(5));








///////////////////
// function f(n){
//     if(n<=1){
//         return 
//     }
//     f(n-1)
//     console.log(n);
//     f(n-1)
//     console.log("next line");
// }

// f(5)