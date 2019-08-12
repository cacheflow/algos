
var findWords = function(words) {
    let first = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P']
    let second = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L']
    let third = ['Z', 'X', 'C', 'V', 'B', 'N', 'M']
    
    let firstRow = {}
    let secondRow = {}
    let thirdRow = {}
    
    first.forEach(f => firstRow[f] = f)
    second.forEach(f => secondRow[f] = f)
    third.forEach(f => thirdRow[f] = f)
    let newArr = []
    while(words.length !== 0) {
      let tempWord = words.pop()
      let word = tempWord
      word = word.split('')
      let firstCount = 0 
      let secondCount = 0 
      let thirdCount = 0 
      for(let i = 0; i < word.length; i++) {
        if(word[i].toUpperCase() in firstRow) {
            firstCount++
        }
        else if(word[i].toUpperCase() in secondRow) {
            secondCount++
        }
        else if(word[i].toUpperCase() in thirdRow) {
            thirdCount++
        }
      }
      if( (firstCount == tempWord.length) || (secondCount == tempWord.length) || (thirdCount == tempWord.length) ) {
        newArr.unshift(tempWord)
      }
    }
    return newArr
};  

findWords(["Hello", "Alaska", "Dad", "Peace"])