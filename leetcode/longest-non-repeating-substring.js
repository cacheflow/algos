var lengthOfLongestSubstring = function(s) {
    if(s.length == 0) {
        return 0 
    }
    if(s.length == 1) {
        return 1
    }
   let lookup = new Map()
   let len  = s.length 
   let max = 0
   let start = 0 
   for(let i = 0; i < len; i++) {
    let char = s.charAt(i)
    if( lookup.has(char) && lookup.get(char) >= start) {
        start = lookup.get(char) + 1
    }
    lookup.set(char, i)
    max = Math.max(max, i - start + 1)
    // console.log("max is ", max)
    console.log("start is now ", start - i + 1)

   }
   return max 
};


console.log(lengthOfLongestSubstring("pwwwkew"))
