const lengthOfLongestSubstr = (s) => {
  const obj = {};
  let i = 0;
  const letters = s.split('')
  let arr = [];
  for(let i = 0; i < letters.length; i++) {
    if (arr[arr.length - 1] !== letters[i]) {
      arr.push(letters[i])
    }
  }
  console.log('arr is ', arr)
}

lengthOfLongestSubstr("abcabcbb")


//First we check if the last letter in array
//is also the current letter we're looking at
//if it's not then we push it into the array

//We encounter A and push that into the array
//we push b into the aa