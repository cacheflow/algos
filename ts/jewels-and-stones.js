let jewelsAndStones = (J, S) => {
  let source = {}

  J.split('').forEach(l => source[l] = 0)
  S.split('').forEach((letter) => {
    if(letter in source) {
      source[letter]++
    }
  })
  return Object.keys(source).map(l => parseInt(source[l])).reduce((a, b) => a + b)
}


console.log(jewelsAndStones("aA", "aAAbbbb"))
