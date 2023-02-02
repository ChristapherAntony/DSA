
const bubbleSort = (arr) => {
    for (let i = 0; i < arr.length - 1; i++) {
        //loop to iterate n times does not part of sorting logic -helper loop
        //no need to last loop so -1 in length array is already sorted

        for (let j = 0; j < arr.length - i - 1; j++) {

            if (arr[j] > arr[j + 1]) {

                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
                
                
            }

            //compare every 2 elements from teh first to compare 
            //end of the j loop largest elem push to end 
            //next time no need to visit last last added index-- thats way 'i' deducting in j loop
        }
    }
}
let arr = [5, 4, 3, 2, 1]
bubbleSort(arr)
console.log(arr);




