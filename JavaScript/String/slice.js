let str = "Hello, world!";


//slice
let sub = str.slice(7, 12);

console.log(sub); // Output: "world"


let subN = str.slice(-6);
console.log(subN); // Output: "ld!"
 

//substring 
let substring = str.substring(7, 12);
console.log(substring); // Output: "world"

//You cannot use negative indexes with the substring() method. If you pass a negative index as the start or end argument, the method will treat it as 0.
