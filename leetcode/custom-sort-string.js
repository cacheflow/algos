var customSortString = function (S, T) {
  let s = S;
  let t = T;
  const obj = {};
  for(let i = 0; i < s.length; i++) {
    obj[s[i]] = [i]
  }
  t = t.split('')
  let arr = []
  for(var j = 0; j < t.length; j++) {
    if(t[j] in obj) {
      let letter = t[j];
      let index = obj[t[j]][0];
      arr[index] = letter
    }
  }
  t.forEach((l) => {
    if ( !(l in obj) ) {
      arr.push(l)
    }
  })
  return arr
};

customSortString("cba", "abcd");