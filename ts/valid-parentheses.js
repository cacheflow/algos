class Stack {
  constructor() {
    this.index = 0;
    this.data = {}
  }

  push(data) {
    this.data[++this.index] = data
  }

  pop() {
    if(this.index) {
      let curr = this.data[this.index]
      delete this.data[this.index]
      --this.index
      return curr
    }
    else {
      throw new Error("No data to pop off")
    }
  }

  peek() {
    if(this.index) {
      let curr = this.data[this.index]
      return curr
    }
    else {
      throw new Error("No data to peek")
    }
  }

  isEmpty() {
    return this.index === 0
  }

  list() {
    return Object.keys(this.data).map(k => this.data[k])
  }
}
let validParens = (left, right) => (left == '[' && right == ']') || (left == '{' && right == '}') || (left == '(' && right == ')')

var isValid = function(s) {
  if(s.length % 2 == 1) {
    return false
  }
  if(s.length === 0) {
    return true
  }
  let sArr = s.split('')
  let len = sArr.length
  let stack = new Stack()
  let copy = stack

  for(var i = 0; i < len; i++) {
    if( sArr[i] == '{' || sArr[i] == '[' || sArr[i] == '(') {
      stack.push(sArr[i])
    }
    else {
      if( !stack.isEmpty() && validParens(stack.peek(), sArr[i]) ) {
        stack.pop()
      }
    }
  }
  return stack.isEmpty()
};



// console.log("is this valid ))))", isValid("(()))))"))
console.log("is this valid ((", isValid("))"));
