const anagramMappings = function(A, B) {
  if(A.length !== B.length) {
    return []
  }
  let obj = {}
  B.forEach((num, index) => {
    if(num in obj) {
      obj[num] = [index]
    }
    else {
      obj[num] = [index]
    }
  })
  let arr = []
  A.forEach((num) => {
    for(let i = 0; i < obj[num].length; i++) {
      arr.push(obj[num][i])
    }
  })
  return arr
};

const a = [40,40]
const b = [40,40]


anagramMappings(a, b)
