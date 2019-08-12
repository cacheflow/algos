/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    let obj = {}
    let letter = ''
    for(var i = 0; i < t.length; i++) {
      if(t[i] in obj) {
        obj[t[i]]++
      }
      else {
        obj[t[i]] = 1
      }
    }
    for(var j = 0; j < s.length; j++) {
      if(s[j] in obj) {
        obj[s[j]]--
      }
    }
    for(var key in obj) {
      if(obj[key] > 0) {
        letter = key
      }
    }
    return letter
};


console.log(findTheDifference('abcde', 'abcdef'))
