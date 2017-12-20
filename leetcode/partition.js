let arrayPairSum = (nums) => {
  let sum = 0
  nums.sort()
  for(var i = 0; i < nums.length; i++) {
    let curr = nums[i]
    let next = i++
    sum += Math.min(nums[i], nums[next])
  }
  console.log(sum)
  return sum
}

//runtime for best and average of sort:
// O(n log(n)) and worst is O(n)

arrayPairSum([6214, -2290, 2833, -7908])
