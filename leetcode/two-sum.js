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



twoSum([3, 2, 3, 1, 5], 6)


//Two sum works by storing the difference between the target - current number
//you then look in the hash and ask is this number within the hash
//while you iterate and if it is then we get that indexed value and
//the current index beacuse that current number is the difference value
//we are looking

//Technique here is to use a hash for space so we can come back later
//and look for the correct value.
