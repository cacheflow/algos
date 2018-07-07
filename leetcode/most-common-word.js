var mostCommonWord = function (paragraph, banned) {
  let obj = banned.reduce((a, b) => {
    a[b] = b
    return a
  }, {})
  let p = paragraph.split(' ')
  let words = {};

  for(let i = 0; i < p.length; i++) {
    let cleanedWord = p[i].replace(/[^A-Za-z]/ig, '').toLowerCase()
    
    if ( !(cleanedWord in obj) ) {
        if (cleanedWord in words) {
            words[cleanedWord]++
        }
        else {
            words[cleanedWord] = 1
        }
    }
  }
  let wordsAsArr = Object.keys(words).map((word) => {
    return [words[word], word]
  })
  let sorted = wordsAsArr.sort((a, b) => {
    return a[0] > b[0] ? -1 : 1
  })
  return sorted[0][1]
};
//first solution will optimize
mostCommonWord("Bob hit a ball, the hit BALL flew far after it was hit.", ["hit"]);