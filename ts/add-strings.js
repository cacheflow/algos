var addStrings = function(num1, num2) {
  let i = num1.length
  let j = num2.length
  let carry = 0;
  let num1Arr = num1.split('')
  let num2Arr = num2.split('')
  let s = ""
  while(i >= 0 || j >= 0 || carry === 1) {
    let a = i >= 0 ? (num1Arr[i--] - '0') : 0
    let b = j >= 0 ? (num2Arr[j--] - '0') : 0
    let sum = a + b + carry
    s += sum % 10
    carry = sum / 10
  }
  return s
};


console.log(addStrings("9", "99"))
