var dominantIndex = function(nums) {
  if(nums.length <= 1) {
    return -1
  } 
  nums.sort()
  let last = nums[nums.length - 1]
  for(var i = 0; i < nums.length; i++) {
    console.log("hello ", nums[last])
    if( (nums[i] * 2) >= nums[last] ) {
      return -1
    }
  }
  return nums[last]
};

dominantIndex([0, 0, 0, 1])