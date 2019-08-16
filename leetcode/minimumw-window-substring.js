var minWindow = function (s, t) {
  // if(t > s || !s || !t) {
  //   return "";
  // }
  let arr = s.split('')
  let letters = t.split('')
  for(var i = 0; i < arr.length; i++) {
    let first = s[i];
    let second = s[i + 1]
    let third = s[i + 2]

  }
};



let s = "ADOBECODEBANC";
let t = "ABC"

minWindow(s, t)