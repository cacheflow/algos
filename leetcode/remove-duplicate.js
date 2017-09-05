var removeDuplicates = function(nums) {
  if(nums.length == 0) {
    return 0
  }
  var previous = 0;
   for(var next = 1; next < nums.length; next++) {
    if(nums[next] != nums[previous]) {
      //if the numbers are unique then
      //increment the previous pointer
      //and move the unique number to
      //the duplicate numbers place
      previous++
      nums[previous] = nums[next]
    }
  }
  return previous + 1
};

removeDuplicates([1, 1, 2, 2, 3])
