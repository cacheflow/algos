var twoSum = function(nums, target) {
  var result = [];
  var obj = {}
  for(var i = 0; i < nums.length; i++) {
    if(obj.hasOwnProperty(nums[i])) {
      result[0] = obj[nums[i]]
      result[1] = i
    }
    else {
      obj[target - nums[i]] = i
    }
  }
  return result
}

twoSum([3,2,4, 3, 5], 6)
