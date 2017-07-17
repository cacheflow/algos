var isAnagram = function(s, t) {
  let anagram = true
  if(s.length != t.length) {
    return false
  }
  let obj = {}
  let sArr = s.split("")
  let tArr = t.split("")
  for(let i = 0; i < sArr.length; i++) {
    if(obj.hasOwnProperty(sArr[i])) {
      obj[sArr[i]]++
    }
    else {
      obj[sArr[i]] = 1
    }
  }
  for(let i = 0; i < tArr.length; i++) {
    obj[tArr[i]]-=1
    if(obj[tArr[i]] < 0 || obj[tArr[i]] == NaN) {
      anagram = false
    }
  }
  return anagram
};


console.log(isAnagram("a", "b"))
