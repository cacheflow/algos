var findTheDifference = function(s, t) {
   let charCodeS = 0, charCodeT = 0
   for(var i = 0; i < s.length; i++) {
    charCodeS += i
   }
   for(var i = 0; i < t.length; i++) {
    charCodeT += i
   }
   return t[Math.abs(charCodeS - charCodeT)]  
};
s = "abcd"
t = "abcde"
console.log(findTheDifference(s, t))