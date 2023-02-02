let arr="malayalam"
// let arr=[12,34,12]

function isPalindrome(arr){
   for(let i=0; i<arr.length/2;i++){
    if(arr[i]!==arr[arr.length-1-i])return false
   }
   return true
}
function usingJSmethods(arr){
    return  arr=== arr.split('').reverse().join('')
}

console.log(isPalindrome(arr));
console.log(usingJSmethods(arr));