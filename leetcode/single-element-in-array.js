var singleNonDuplicate = function(nums) {
  if(nums.length === 1) {
    return nums[0]
  }  
  let nl = nums.length
  for(let i = 0; i < nl; i++) {
    let next = i + 1
    let prev = i === 0 ? i + 1 : i - 1
    if( (nums[prev] != nums[i]) && nums[i] != nums[next]) {
      return nums[i]
    }
  }
};

console.log(singleNonDuplicate([1, 1, 2]))