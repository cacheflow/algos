var moveZeroes = function(nums) {
  var len = nums.length
  var nonZeroIndex = 0;
  for(var i = 0; i < len; i++) {
    if(nums[i] !== 0) {
      nums[nonZeroIndex++] = nums[i]
    }
  }
  for(var j = nonZeroIndex; j < len; j++) {
    nums[j] = 0
  }
};

var nums = [0, 1, 3, 0, 0, 0, 10, 3, 12, 6, 9]
moveZeroes(nums)
