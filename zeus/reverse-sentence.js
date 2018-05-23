var sentence = "I love leetcode"


function reverse(word) {
  word = word.split('')
  let i = 0;
  let len = word.length - 1

  while(i < len && len > i) {
    //remember when reversing you only need
    // to cache one.
    let temp = word[len]
    word[len] = word[i]
    word[i] = temp
    i++
    len--
  }
  console.log(word)
  return word
}

reverse("code")
