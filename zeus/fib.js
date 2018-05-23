let i = 0;
function fib(num, memo) {
  memo = memo || {}
  if(num === 0) {
    return 0
  }
  if(num === 1) {
    return 1
  }
  if(num >= 1449) {
    return Infinity
  }
  if(num in memo) {
    console.log('num is in memo', memo[num  ])
    return memo[num]
  }
  console.log('memo has ', memo)
  memo[num] = fib(num - 2, memo) + fib(num - 1, memo)
  console.log('memo is ', memo)
  return memo[num]
}

 console.log(fib(4))
