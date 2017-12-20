var hammingDistance = function(x, y) {
  let xor = x ^ y
  let res = 0
  while(xor != 0) {
    res += xor & 1
    x >>= 1
    console.log(res)
  }
  return res
};

console.log(hammingDistance(1, 4))