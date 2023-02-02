function f(n) {
  if (n <= 1) {
    return 1
  }
  return n * f(n - 1)
}
console.log(f(5));

//////////////////////////
function factorial(n) {
  if (n <= 1) return 1
  console.log(n);
  return n * factorial(n - 1)
}
console.log(factorial(5));



///////////////////
function flattenArray(arr) {
  let flatArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      flatArr = flatArr.concat(flattenArray(arr[i]));
    } else {
      flatArr.push(arr[i]);
    }
  }
  return flatArr;
}


function reversePrint(head) {
  if (head === null) return
  reversePrint(head.next)
  console.log(head.next);
}


function factorial(n) {
  if (n <= 1) return 1
  return n * factorial(n - 1)
}


///
let num = 0
function x() {
  if (num >= 5) return
  num++
  console.log("first", num);
  x()
  num--
  console.log('last', num);

}


