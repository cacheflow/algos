var validSquare = function(p1, p2, p3, p4) {
    let notEmpty = [p1, p2, p3, p4].every((a) => a.length > 0)
    if(notEmpty) {
      let len = arguments.length - 1;
      let i = 0;
      let leftSum = 0;
      let rightSum = 0;
      while(i <= len) {
        let leftSide = arguments[i].slice(0, Math.min(arguments[i].length / 2))
        let rightSide = arguments[i].slice(Math.max(arguments[i].length / 2, arguments[i].length - 1))
        leftSum += leftSide[0]
        rightSum += rightSide[0]
        i++
      }
      console.log(leftSum, rightSum)
      return leftSum === rightSum
    }
    else {
      return false
    }
};

validSquare([6987,-473],
[6985,-473],
[6986,-472],
[6986,-474],
)
