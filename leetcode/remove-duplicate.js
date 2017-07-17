var removeDuplicates = function(nums) {
  var index = 0;
  for(var i = 0; i < nums.length; i++) {
    if(nums[i] != nums[i + 1]) {
      nums[index++] = nums[i]
    }
  }

  console.log(nums)
};


removeDuplicates([1,1])
