/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
  let obj = {};
  nums = nums.sort();
  let arr = [];
  if(nums.length === 1) {
    return nums[0]
  }
  nums.forEach((n) => {
    if( !(n in obj) ) {
      obj[n] = n
    }
    else {
      obj[n]++
    }
  })
  return arr
};


majorityElement([1])
