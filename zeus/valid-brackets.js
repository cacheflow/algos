function validBrackets(data) {
  let arr = [];
  if(data.length % 2 === 1) {
    return false
  }
  data.split("").forEach((d) => {
    if(d === '{' || d === '[' || d === '(') {
      arr.push(d)
    }
    else {
      let curr = arr[arr.length - 1]
      if( (curr === '{' && d === '}') || (curr === '[' && d === ']') || (curr === '(' && d === ')') ) {
        arr.pop()
      }
    }
  })
  if(arr.length === 0) {
    return true
  }
  return false
  //this is O(n) time and space
}

console.log(validBrackets('{[]()}'))
console.log(validBrackets('{[(])}'))
console.log(validBrackets('{[}'))
