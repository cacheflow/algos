var longestWord = function(words) {
  if(words.length === 0 || words === null) {
    return ""
 }
  let longestWord;
  words = words.sort()
  let lw = ""
  let s = new Set()
  words.forEach((w) => {
    let prefix = w.substr(0, w.length -1)
    if(w.length === 1 || s.has(prefix)) {
      s.add(w)
      if(w.length > lw.length) {
        lw = w
      }
    }
  })
  return lw
};

longestWord(["a", "banana", "app", "appl", "ap", "apply", "apple"])

// Given a list of strings words representing an English Dictionary,
// find the longest word in words that can be built one character at
// a time by other words in words. If there is more than one possible answer,
// return the longest word with the smallest lexicographical order.
//If there is no answer, return the empty string.
