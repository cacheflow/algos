let containsNearbyDuplicate = function(nums, k) { 
   nums.sort()
   let obj = {}
   for(var i = 0; i < nums.length; i++) {
    obj[nums[i]] = i 
   }
   console.log(obj)
   if(nums[k] === k) {
    return true 
   }
   return false
};

console.log(containsNearbyDuplicate([-1, -1], 1))


