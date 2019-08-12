var findDisappearedNumbers = function(nums) {
  var newArr = []
  if(nums.length) {
    for(var i = 0; i < nums.length; i++) {
      var val = Math.abs(nums[i]) - 1
      if(nums[val] > 0) {
        nums[val] = -nums[val]
      }
    }
    for(var i = 0; i < nums.length; i++) {
      if(nums[i] > 0) {
        newArr.push(i + 1)
      }
    }
  }
  return newArr
}

var findDisappearedNumbers = function(nums) {
  let obj = {};
  let counter = 0; 
  let arr = [];

  for(var i = 0; i < nums.length; i++) {
    obj[nums[i]] = i
  }
  for(var i = 0; i < nums.length; i++) {
    counter++
    if(!obj.hasOwnProperty(counter)) {
      arr.push(counter)
    }
  }
  return arr
} 

findDisappearedNumbers([4,3,2,7,8,2,3,1])
