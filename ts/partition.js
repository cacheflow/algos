let arrayPairSum = (nums) => {
   nums.sort((a, b) => {
    return a - b
   })
    var result = 0;
    let sum = 0
    for (var i = 0; i < nums.length; i += 2 ) {
      console.log("i is ", i)
      result += nums[i]
    }
    return result;
}

//runtime for best and average of sort:
// O(n log(n)) and worst is O(n)

arrayPairSum([11, 41, -9046, 2047, 1118, 8477, 8446, 279, 4925, 7380, -1719, 3855])
