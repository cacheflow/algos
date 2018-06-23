var intToRoman = function(num) {
    let obj = {
      'I': 1,
      'V': 5,
      'x': 10,
      'L': 50,
      'C': 100,
      'D': 500,
      'M': 1000,
    }
    let roman = ''
    Object.keys(obj).forEach((k) => {
      console.log(22 % obj[k])
    })
};

intToRoman(5)
