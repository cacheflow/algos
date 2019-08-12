var moveZeroes = function(nums) {
  let count = 0;
  let numOfZeroes = 0;
  for(var i = 0; i < nums.length; i++) {
    if(nums[i] !== 0) {
      nums[count++] = nums[i]
    }
    if(nums[i] === 0) {
      numOfZeroes++
    }
  }
  for(; count < nums.length; count++) {
    nums.splice(count)
  }
  while(numOfZeroes !== 0) {
    nums.push(0)
    numOfZeroes--
  }
  return nums
};

var nums = [0,1,0,3,12]
moveZeroes(nums)
