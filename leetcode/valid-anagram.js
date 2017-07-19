var isAnagram = function(s, t) {
  var obj = {}
  var wordIsAnagram = true 
  if(s.length != t.length) {
    wordIsAnagram = false 
    return wordIsAnagram
  }
  for(var i = 0; i < s.length; i++) {
    if(obj.hasOwnProperty(s.charAt(i))) {
      obj[s.charAt(i)]++
    }
    else {
      obj[s.charAt(i)] = 1
    }
  }
  for(var i = 0; i < t.length; i++) {
    if(obj.hasOwnProperty(t.charAt(i))) {
      obj[t.charAt(i)]--
    }
    if(obj[t.charAt(i)] < 0) {
      wordIsAnagram = false 
    }
    if(!obj.hasOwnProperty(t.charAt(i))) {
      wordIsAnagram = false 
    }
  }
  return wordIsAnagram
};


console.log(isAnagram("aacc", "ccac"))
