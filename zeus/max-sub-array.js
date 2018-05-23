var maxSubArray = function(nums) {
    var currentMax = nums[0]
    var globalMax = nums[0]
    if(nums.length === 0) {
      return nums
    }
    for(var i = 1; i < nums.length; i++) {
      currentMax = Math.max(nums[i], currentMax + nums[i])
      globalMax = Math.max(currentMax, globalMax)

    }
    console.log(globalMax)
};

maxSubArray([-2,1,-3,4,-1,2,1,-5,4])
