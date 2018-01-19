
var findWords = function(words) {
    let first = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P']
    let second = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L']
    let third = ['Z', 'X', 'C', 'V', 'B', 'N', 'M']
    
    let firstRow = {}
    let secondRow = {}
    let thirdRow = {}
    let i = [first.length, second.length, third.length]
    
    first.forEach(f => firstRow[f] = f)
    second.forEach(f => secondRow[f] = f)
    third.forEach(f => thirdRow[f] = f)
    


};  

findWords(["Hello", "Alaska", "Dad", "Peace"])