function insertion(arr) {
    for(let i=1; i<arr.length;i++){
        console.log('.....................',arr);
        let curr=arr[i]
        let j=i-1
        while(j>=0 && arr[j]>curr){
            console.log(arr);
            arr[j+1]=arr[j]
            j--
        }
        arr[j+1]=curr
    }

}

let arr = [5, 4, 3, 2, 1]
insertion(arr)
console.log(arr);