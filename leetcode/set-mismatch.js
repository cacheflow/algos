var findErrorNums = function(nums) {
    let curr = 0
    nums.sort()
    let obj = {}
    let s = new Set()
    let arr = []
    for(let i = 0; i < nums.length; i++) {
      curr++
      console.log(curr, nums[i])
      if(s.has(nums[i])) {
        arr.push(nums[i])
      }
      else if(curr !== nums[i]) {
        arr.push(nums[i])
      }
      else {
        s.add(nums[i])
      }
    }
    console.log(arr)
};


findErrorNums([1, 2, 2, 4])
