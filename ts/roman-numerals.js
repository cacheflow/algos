function toRoman(num) {
  let result = ''
  let romans = [
    {
      value: "1000",
      letter: "M"
    },
    {
      value: "500",
      letter: "D"
    },
    {
      value: "100",
      letter: "C"
    },
    {
      value: "50",
      letter: "L"
    },
    {
      value: "10",
      letter: "X"
    },
    {
      value: "5",
      letter: "v"
    },
    {
      value: "1",
      letter: "I"
    }
  ]

  for(var i = 0; i < romans.length; i++) {
    while(num > num % romans[i].value) {
      result += romans[i].letter
      num -= romans[i].value
    }
  }
  return result
}

toRoman(8)