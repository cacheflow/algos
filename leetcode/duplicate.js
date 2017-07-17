/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  var duplicatePresent = false
  if(nums.length) {
    nums = nums.sort()
    for(var i = 0; i < nums.length; i++) {
      if(nums[i] === nums[i + 1]) {
        duplicatePresent = true
      }
    }
  }
  return duplicatePresent
};


containsDuplicate([1, 1, 2, 3, 4])
