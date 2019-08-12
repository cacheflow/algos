
const lengthOfLongestSubstring = function (s: string): Number {
  let currentLetter: string;
  let nextLetter: string;
  let tempStr: string = "";
  let arr: Array<string>   = [];
  for(let i: number = 0; i < s.length; i++) {
    currentLetter = s.charAt(i)
    nextLetter = s.charAt(i + 1)
    if(!arr.includes(currentLetter)) {
      arr.push(currentLetter)
    }
  }
  return arr.length
};

lengthOfLongestSubstring('pwwwkew');