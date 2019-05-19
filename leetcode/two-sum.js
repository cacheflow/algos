var twoSum = function (nums, target) {
  if(!nums.length) return [];
  if(!target) return [];
  let arr = [];
  let obj = {};
  let val; 
  nums.forEach((num, i) => {
    val = target - num
    if( !(val in obj && val > 0)  ) {
      obj[val] = val
    }
  })
  console.log('obj is ', obj)
  nums.forEach((num, i) => {
    if(num in obj && obj[num] + num === target) {
      arr.push(i)
    }
  })
  return arr
};

var arr = [2, 7, 11, 15];

console.log(twoSum([3, 2, 4], 6))



