
str = "malayalam"

function isPalindrome(str) {
    let reversedString = str.split('').reverse().join('')
    console.log(reversedString);
    return str === reversedString;
}

function a(str){
    for(i=0;i<str.length/2;i++){
        if(str[i]!==str[str.length-i-1]) return false
    }
    return true
}


console.log(a(str));