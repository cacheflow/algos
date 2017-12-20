var reverseVowels = function(s) {
  var firstIndex = -1
  var lastIndex = -1
  var obj = {}
  s = s.split('')
  for(var i = 0; i < s.length; i++) {
    var next = i == s.length - 1 ? 0 : i + 1
    var currentLetter = s[i]
    var nextLetter = s[next]
    if(currentLetter == 'a' || currentLetter == 'e' || currentLetter == 'i' || currentLetter == 'o' || currentLetter == 'u') {
      if(i > firstIndex) {
        firstIndex = i
      }
    }
  }
};

reverseVowels('hello')
