var generatePossibleNextMoves = function(s) {
    if(s.length === 0 || s.length === 1) {
        return []
    }
    let arr = []
    for(let i = 1; i < s.length; i++) {
      if(s.charAt(i) === '+' && s.charAt(i - 1) === '+') {
        let first = s.substr(0, i - 1)
        arr.push(s.substr(0, i - 1) + '--' + s.substr(i + 1, s.length))
      }
    }
    console.log(arr)
    return arr
};


generatePossibleNextMoves('+-----++++++---++++++')
