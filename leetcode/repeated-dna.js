var findRepeatedDnaSequences = function(s) {
    let arr = s.split('')
    let newArr = []
    if(s.length < 10) {
      return s
    }
    for(let i = 0; i < 10; i++) {
      newArr.push(arr[i])
    }
    newArr = [].concat(newArr.join(''), newArr.reverse().join(''))
    return newArr
};

let s = 'AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT'

findRepeatedDnaSequences(s)
