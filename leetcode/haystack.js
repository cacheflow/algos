let indexOf = (needle, haystack) => {
  let n = needle.length 
  let h = haystack.length 
  let j = 0; 
  
  for(var i = 0; i < haystack.length; i++) {
    j++
    while(needle[j] != haystack[i]) {
      i++
      if(j == i) {
        return false 
      }
    }
  }
  return true 
}

let intersection  = (a, b) => {
  let ai = 0
  let bi = 0
  let results = []
  while(ai < a.length && bi < b.length) {
    if(b[bi] > a[ai]) {
      ai++
    }
    else if(a[ai] > b[bi]) {
      bi++
    }
    else {
      results.push(a[ai])
      ai++
      bi++
    }
  }
  return results
}


console.log(intersection([1, 2, 3, 4, 5], [1, 2, 5]))

