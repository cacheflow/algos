var lengthOfLongestSubstring = function (s) {
  if(s.length >= 1 && s.trim() === '') {
    return 1;
  }
  if(!s) {
    return 0;
  }
  if(s.length === 1) {
    return 1;
  }
  const strSet = new Set();
  let max = 0;
  let left = 0;
  console.log("s is ", s)
  for(let right = 0; right < s.length; right++) {
    const char = s.charAt(right)
    if(!strSet.has(char)) {
      strSet.add(char)
    }
    else {
      while (true) {
        let curr = s[left];
        if (curr === char) {
          //this is when we're dealing with duplicate characters
          left++
          break;
        }
        else {
          // console.log("hitting the else")
          // console.log('set has ', strSet.entries())
          // console.log("left is ", curr, left)
          // console.log("right is ", char, right)
          // console.log("curr is ", curr)
          // console.log("char is ", char)
          console.log('going to delete ', curr)
          console.log("char is ", char)
          console.log('set contains ', strSet.entries())
          strSet.delete(curr);
          console.log('set is now ', strSet.entries())
          left++;
        }
      }
    }
    max = Math.max(max, strSet.size);
  }
  return max;
};

lengthOfLongestSubstring('pwwkew');


//With this algorithm we use space and the sliding window to reduce computations
//we do this by adding the unseen characters to the set.
//and by checking in every iteration if the current character has been added 
//to the set already. If so