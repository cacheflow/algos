var longestPalindrome = function(s) {
  var obj = {}
  let letters = s.split('')
  letters.forEach((l) => {
    if(l in obj) {
      obj[l]++
    }
    else {
      obj[l] = 1
    }
  })    
  let newStr = ""
  while(newStr.length === 0 && newStr !== newStr.split('').reverse()) {
    for(var key in obj) {
      if(obj[key] > 1) {
        newStr += key
      }
    }
  }
};

longestPalindrome("babad")