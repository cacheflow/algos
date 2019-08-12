const isPrime = num => {
  for(let i = 2; i < num; i++) {
    if(num % i === 0) {
      return false
    }
    return num !== 1;
  }
}
//a number greater than 1 and can either be 
//divided by itself or 1


