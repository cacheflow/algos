var canConstruct = function(ransomNote, magazine) {
  let obj = {}; 
  if(ransomNote.length > magazine.length) {
    return false 
  }
  for(var i = 0; i < ransomNote.length; i++) {
    if(ransomNote[i] in obj) {
        obj[ransomNote[i]]++
    }
    else {
        obj[ransomNote[i]] = 1;
    }
  }
  for(var i = 0; i < magazine.length; i++) {
    if(magazine[i] in obj) {
      obj[magazine[i]]--
    }
  }
  return Object.keys(obj).every(k => obj[k] <= 0)
};

console.log(canConstruct("fffbfg", "effjfggbffjdgbjjhhdegh"))