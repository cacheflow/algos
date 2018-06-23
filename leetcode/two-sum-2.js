var twoSum = function(numbers, target) {
  var obj = {};
  for(var i = 0; i < numbers.length; i++) {
    obj[target - numbers[i]] = i;
  }
  console.log(obj)
};

twoSum([2,3,4], 6)
