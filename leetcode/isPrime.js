const isPrime = num => {
  for(let i = 2; i < num; i++) {
    console.log("hello", i)
    if(num % i === 0) {
      return false
    }
    return num !== 1;
  }
}
//a number greater than 1 and can either be 
//divided by itself or 1

console.log(isPrime(1110))

function rFact(num)
{
    if (num === 0)
      { return 1; }
    else
      { return num * rFact( num - 1 ); }
}

console.log(rFact(5))