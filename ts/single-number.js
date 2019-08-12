var singleNumber = function(nums) {
  nums = nums.sort()
  let singleN;
  for(let i = 0; i < nums.length; i++) {
    let next = nums[i + 1]
    console.log(nums[i] - nums[next], nums[i], nums[next])
  }

};


let arr = [1, 1, 2, 2, 3, 4, 4, 5, 5, 6, 6]
console.log(singleNumber(arr))
