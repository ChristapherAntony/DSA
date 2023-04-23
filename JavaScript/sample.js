var twoSum = function (nums, target) {
    let obj = {};
    for (const i in nums) {
        let x = target - nums[i]
        if (x in obj) return [obj[x], i]
        obj[nums[i]] = i
    }
    return null
};

let arr = [2, 7, 11, 15]
let tgt = 9
console.log(twoSum(arr, tgt));