
var checkValidString = function(s) {
  let arr = [];
  let stars = 0;
  if(s.length === 0) {
    return true
  }
  if(s.length === 1 && s[0] != '*') {
    return false
  }
  s = s.split('')
  for(let i = 0; i < s.length; i++) {
    if(s[i] === '(') {
      arr.push(s[i])
    }
    else if(s[i] === ')') {
      if(arr[arr.length - 1] === '(') {
        arr.pop()
      }
    }
    else if(s[i] === '*') {
      stars++
    }
    else {

    }
  }
  console.log(stars, arr)
  // if(stars >= arr.length || arr.length === 0) {
  //   return true
  // }
  // return false
};

console.log(checkValidString("(())((())()()(*)(*()(())())())()()((()())((()))(*"))
