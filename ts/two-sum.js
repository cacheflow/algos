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

twoSum([3, 2, 3, 1, 5], 6)


//Two sum works by storing the difference between the target - current number
//you then look in the hash and ask is this number within the hash 
//while you iterate and if it is then we get that indexed value and 
//the current index beacuse that current number is the difference value
//we are looking

//Technique here is to use a hash for space so we can come back later
//and look for the correct value.