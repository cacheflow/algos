var isValidSudoku = function(board) {
  let i = 0;
  let j = 0;
  let len = board.length;
  let rows = {};
  let columns = {};
  if(board === null || board.length < 9 || board[0].length < 9) {
     return false
  }
  while(j < len) {
    //first we check the rows and columns
    let columnVal = board[i][j]
    let rowVal = board[j][i]
    let parsedColumnVal = parseInt(columnVal)
    let parsedRowVal = parseInt(rowVal)
    if (Number.isInteger(parsedColumnVal) || Number.isInteger(parsedRowVal)) {
      if( !(parsedColumnVal in columns) ) {
        columns[parsedColumnVal] = 1
      }
      if (!(parsedRowVal in columns)) {
        rows[parsedRowVal] = 1
      }
      else if(parsedColumnVal in columns) {
        return false 
      }
      else if(parsedRowVal in rows) {
        return false 
      }
      else {}
    }
    i++
    if (i === len) {
      j++
      i = 0;
    }
  }
  for (let i = 0; i < 9; i++) {
    let obj = {}, m1 = Math.floor(i / 3) * 3, m2 = (i % 3) * 3;
    for (let j = 0; j < 3; j++) {
      for (let k = 0; k < 3; k++) {
        let cur = board[m1 + j][m2 + k];
        console.log("cur is ", cur)
        if (cur !== '.') {
          if (obj[cur]) return false;
          obj[cur] = 1;
        }
      }
    }
  }
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
