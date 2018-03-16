var findLHS = function(nums) {
  let arr = []
  if(nums.length === 0 || nums === null) {
    return 0
  }
  for(let i = 0; i < nums.length; i++) {
    let prev = (i === 0 ? 0 : nums[i - 1])
    if(nums[i] - prev <= 1 && (arr.length / 2) != nums.length / 2) {
      arr.push(nums[i])
    }
  }
  return arr.length
};

console.log(findLHS([1, 2, 3, 4]))
