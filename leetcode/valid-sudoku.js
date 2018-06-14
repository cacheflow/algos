var isValidSudoku = function(board) {
  let i = 0;
  let j = 0;
  let len = board.length;
  let rows = []
  let columns = []
  let rowSet = new Set()
  let columnSet = new Set()
  let isValid = true 
  let validBoardLen = board.some(b => b.length <= 0)
  if(validBoardLen) {
     return false
  }
  while(j < len) {
    let columnVal = board[i][j]
    let rowVal = board[j][i]
    let parsedColumnVal = parseInt(columnVal)
    let parsedRowVal = parseInt(rowVal)
    if (Number.isInteger(parsedColumnVal)) {
     if(!columnSet.has(parsedColumnVal)) {
       columnSet.add(parsedColumnVal)
     }
     else {
       return false 
     }
    }
    if (Number.isInteger(parsedRowVal)) {
      if (!rowSet.has(parsedRowVal)) {
        rowSet.add(parsedRowVal)
      }
      else {
        return false 
      }
    }
    i++
    if (i === len) {
      j++
      i = 0;
      columnSet.clear()
      rowSet.clear()
    }
  }
  return isValid
};

const board = [
  [".", ".", ".", ".", "5", ".", ".", "1", "."], 
  [".", "4", ".", "3", ".", ".", ".", ".", "."], 
  [".", ".", ".", ".", ".", "3", ".", ".", "1"], 
  ["8", ".", ".", ".", ".", ".", ".", "2", "."], 
  [".", ".", "2", ".", "7", ".", ".", ".", "."], 
  [".", "1", "5", ".", ".", ".", ".", ".", "."], 
  [".", ".", ".", ".", ".", "2", ".", ".", "."], 
  [".", "2", ".", "9", ".", ".", ".", ".", "."], 
  [".", ".", "4", ".", ".", ".", ".", ".", "."]
]

console.log(isValidSudoku(board))
