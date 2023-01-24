function f(n) {
    if (n <= 1) {
        return 1
    }

    return n* f(n - 1)
}
console.log(f(5));


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


