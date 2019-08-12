var longestWPI = function (hours) {
  if(!hours) {
    return 0;
  }
  const mid = Math.floor(hours.length / 2)
  let firstCount = 0;
  let secoundCount = 0;
  let firstNumbersSeen = 0;
  let secondNumbersSeen = 0;
  let curr;

  for(let i = 0; i < mid; i++) {
    curr = hours[i]
    if(curr > 8) {
      firstCount += 1
    }
    firstNumbersSeen += 1
  }

  for(let j = mid; j < hours.length; j++) {
    curr = hours[j]
    if(curr > 8) {
      secoundCount += 1
    }
    secondNumbersSeen+=1
  }
  if(firstCount === 0 || secoundCount === 0) {
    return 1;
  }
  return firstCount >= secoundCount ? firstNumbersSeen : secondNumbersSeen;
};



const arr = [6, 6, 9]

console.log(longestWPI(arr))