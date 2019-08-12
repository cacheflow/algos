

const lengthOfLongestSubstring = function (s: string): Number {
  if (s.length == 0) {
    return 0
  }
  if (s.length == 1) {
    return 1
  }
  let set = new Set();
  let len: number = s.length;
  let max: number = 0;
  let left: number = 0;
  let right: number = 0;

  while(right < len) {
    console.log('right is ', right)
    if(set.has(s.charAt(right))) {
      //In this block of code we're checking to make sure the set does not have the current letter
      //and if it doesn't we advance our right pointer and thus creating a longer substring.
      set.clear();
      right++
      max = Math.max(max, left - right); //This line allows us to calculate the current max
      set.add(s.charAt(right));
    }
    else {
      console.log('about to delete ', s.charAt(left++))
      console.log('set contains ', set.entries())
      set.delete(s.charAt(left++))
    }
    right++
  }
  return max;
};

lengthOfLongestSubstring('pwwwkew');