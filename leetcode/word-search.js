var exist = function(board, word) {
    if(board.length === 0) {
      return false
    }
    let obj = {}
    for(var j = 0; j < board.length; j++) {
      if(Array.isArray(board[j])) {
        let a = board[j]
        while(a.length !== 0) {
          let curr = a.pop()
          if(curr in obj) {
            obj[curr]++
          }
          else {
            obj[curr] = 1
          }
        }
      }
    }
    for(var i = 0; i < word.length; i++) {
      (word[i] in obj ? obj[word[i]]-- : null)
    }
    let copyOfStr = word.split('')
    word.split('').forEach((s, index) => {
      if(obj[s] >= 0) {
        copyOfStr = copyOfStr.splice(index, 1)
      }
    })
    return copyOfStr.length === 0
};


let b = [
  ['A','B','C','E'],
  ['S','F','C','S'],
  ['A','D','E','E']
]


console.log(exist([['a']], "ab"))
