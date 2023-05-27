const quickSort = arr =>{
    if(arr.length<2) return arr
    let pivot = arr[arr.length-1];
    let right =[],left = [];
for(let i=0 ;i<arr.length-1;i++){
    if(arr[i]<pivot) left.push(arr[i])
    else right.push(arr[i])
}

return [...quickSort(left),pivot,...quickSort(right)]
}


console.log(quickSort([4,6,8,5,1,3,5,7,8,5,43,2]));