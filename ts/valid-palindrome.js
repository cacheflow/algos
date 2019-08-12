var isPalindrome = function(s) {
  let temp = ""
  let alphaRegex = RegExp("[a-zA-Z|0-9]", "i")
  for(var i = s.length - 1; i >= 0; i--) {
      if(alphaRegex.test(s[i])) {
        temp += s[i].toLowerCase()
      }
  }
  return temp == temp.split('').reverse().join('')
};
