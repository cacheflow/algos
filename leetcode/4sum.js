const fourSum = (nums, target) => {
  let arr = [];
  const obj = {};
  nums.sort();
  let complement;
  nums.forEach((num, i) => {
    complement = target - num;

    if( !(complement in obj && complement > 0) ) {
      obj[complement] = complement
    }
  })
  nums.forEach((complement, i) => {
    if (complement in obj && obj[complement] + complement === target) {
      arr.push(i)
    }
  })
  return arr
}

console.log(fourSum([-4, -3, -2, -1, 0, 0, 1, 2, 3, 4], 0))
