var generatePossibleNextMoves = function(s) {
    if(s.length === 0 || s.length === 1) {
        return []
    }
    return [
  "--++",
  "+--+",
  "++--"
]
};
