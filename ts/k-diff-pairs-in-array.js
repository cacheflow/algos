var findPairs = function(nums, k) {
  let set = new Set()
  for(let i = 0; i < nums.length; i++) {
    let next = i === nums.length - 1 ? i - 1 : i + 1
    console.log(nums[i] - 2)
  }
  console.log(nums)
};

findPairs([3, 1, 4, 1, 5], 3)
