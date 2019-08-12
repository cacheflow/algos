var firstUniqChar = function (s) {
  if(s.length === 0) {
    return -1
  }
  if(s.length === 1) {
    return s[0]
  }
  let obj = {};
  let len = s.length; 
  for(let i = 0; i < s.length; i++) {
    let letter = s[i];
    if(letter in obj) {
      obj[letter].push(i)
    }
    else {
      obj[letter] = [i]
    }
  }
  let globalMin = 0;
  let currentMin;
  let val; 
  let found = Object.keys(obj).map(k => obj[k]).filter((a) => {
    return a.length === 1
  })
  
  if(found.length >= 1) {
    let first = found[0]
    return found.map(f => Math.min(first, f[0]))[0]
  }
  return -1
};

console.log(firstUniqChar("z"));