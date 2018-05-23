var str = "I I love love love you you man this is crazy"


function leastWord(str) {
  var str = str.split(' ')
  var min = 1000000000000
  var word = "";
  var obj = {};

  str.forEach((w) => {
    if(w in obj) {
      obj[w]++
    }
    else {
      obj[w] = 1
    }
  })
  let arr = Object.keys(obj).map((k) => {
    return [obj[k], k]
  })
  console.log(arr)
  return arr
}

leastWord(str)
