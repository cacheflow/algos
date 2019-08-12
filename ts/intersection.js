let intersection = (a, b) => {
  let ai = 0; 
  let bi = 0; 
  let result = []
  
  while(ai < a.length && bi < b.length) {
    if(b[bi] > a[ai]) {
      ai++
    }
    else if(a[ai] > b[bi]) {
      console.log(a[ai], " is greater than ", b[bi])
      bi++
    }
    else {
      result.push(a[ai])
      ai++
      bi++
    }
  }
  //remember two pointers and incrementing the lesser array's index
  return result 
}

console.log(intersection([1, 2, 3, 4, 5], [1, 2, 5, 7]))