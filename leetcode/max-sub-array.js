var maxSubArray = function(nums) {
	  var currMax = nums[0]
		var globalMax = 0
    var reg = 0
    for(var i = 0; i < nums.length; ++i) {
      currMax = Math.max(currMax, globalMax + nums[i])
      globalMax = Math.max(0, globalMax + nums[i])
    }
    console.log(nums)
    return currMax
};

console.log(maxSubArray([-2, -1]))