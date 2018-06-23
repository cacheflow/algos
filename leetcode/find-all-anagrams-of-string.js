var findAnagrams = function(s, p) {
  let len = p.length; 
  let map = {}; 
  let result = []; 
  let slideWindow = {};

  for(let i = 0; i < p.length; i++) {
    map[p[i]] = map[p[i]] ? map[p[i]] + 1 : 1; 
  }
  let left = 0; 
  let right = 0; 

  // p is the anagram we're looking for in s. 
  // s is the group of letters we're looking for in p. 
  
  while(right < s.length) {
    let currentLetter = s.charAt(right)
    if(currentLetter in map) {
      if(slideWindow[currentLetter] && map[currentLetter] === 1) {
        left = Math.max(slideWindow[currentLetter], left)
      } 
      if(right - left + 1 === p.length) {
        result.push(left);
        left++
      }
    }else {
      left = right + 1; 
      slideWindow = {};
    }
    slideWindow[currentLetter] = right + 1; 
    right++
  }
  console.log(result)
  return result
}

findAnagrams("cbaebabacd", "abc")