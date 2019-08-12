var findAllAnagrams = function(s, p) {
  let arr = []
  if(s === null || s.length === 0 || p == null || p.length === 0) {
    return arr; 
  }
  let letters = p.split('')
  let h = {}
  //record each character in p to hash
  for(let i = 0; i < letters.length; i++) {
    if(letters[i] in h) {
      h[letters[i]++]
    }
    else {
      h[letters[i]] = 1
    }
  }
  let left = 0; 
  let right = 0; 
  let count = p.length;
  let list = [];
  for(let i = 0; i < p.length; i++) {
    let val = h[s[i]]
    let k = h[s]
    if(h[s[i]] !== undefined && h[s[i]]-- >= 0) {
      count--
    }
  }

  for(let i = 0; i < s.length - p.length + 1; i++) {
    if(count == 0) {
      list.push(i)
    }
    if(h[s[i]] !== undefined && h[s[i]]++ >= 0) {
      count++
    }
    if(h[s[i+p.length]] != undefined && h[s[i+p.length]]-- > 0) {
      count--
    } 
  }
}

findAllAnagrams("cbaebabacd", "abc")