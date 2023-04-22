/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */


let rotate = function(nums, k) {
  k = k % nums.length;
  console.log(k);
  let temp = nums.splice(nums.length - k); 
  nums.unshift(...temp); 
  return(nums)
};


let nums = [1, 2, 3, 4, 5, 6, 7]
let k = 8

console.log(rotate(nums, k));

