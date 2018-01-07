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

  isEmpty() {
    return this.index === 0
  }
}

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
  for(let i = 0; i < len; i++) {
    if(sArr[i] == '(') {
      stack.push(')')
    }
    else if(sArr[i] == '{') {
      stack.push('}')
    }
    else if(sArr[i] == '[') {
      stack.push(']')
    }
    else if(stack.isEmpty() || stack.pop() != sArr[i]) {
      return false
    }
  }
  return stack.isEmpty()
};
