
let fibonaacciBinet = (number, memo) => {
   let sqr = Math.sqrt(5);
   let Phi = (1+sqRootOf5)/2;
   let phi = (1-sqRootOf5)/2
   return Math.round((Math.pow(Phi, number) - Math.pow(phi, number)) / sqr);
}

let fib = (number, memo) => {
  memo = memo || {}
  
  if(number <= 1) {
    return 1
  } 
  if(number <= 2) {
    return 1
  }
  if(number in memo) {
    return memo[number]
  }
  let value = fib(number - 1, memo) + fib(number - 2, memo) 
  memo[number] = value
  return value 
}


console.log(fib(7))