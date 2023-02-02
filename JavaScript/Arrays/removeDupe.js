var removeDuplicates = function (nums) {

    let delElm = (index) => {
        for (let i = index; i < nums.length; i++) {
            nums[i] = nums[i + 1]
        }
    }

    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            if(nums[i]===nums[j] && i!==j){
                nums.splice(j,1)
                // delElm(j)
                //   nums.length--
                //   i--
            }
        }
    }
    

};
var removeDuplicatesSorted = function (nums) {

    let i = 0;
    for (let j = 1; j < nums.length; j++) {
        if (nums[j] !== nums[i]) {
            i++;
            nums[i] = nums[j];
        }
    }
   
    return i + 1;

};

let arr=[2,3,4,5,6,2,5]
removeDuplicatesSorted(arr)
console.log(arr);