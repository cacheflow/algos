class Stack {
  constructor() {
    this.data = {}
    this.index = 0
  }

  push(data) {
    this.data[++this.index] = data
  }

  pop() {
    let {index} = this
    if(this.index > 0) {
      let cachedData = this.data[index]
      delete this.data[this.index]
      --this.index
      return cachedData
    }
    else {
      throw new Error("Nothing to pop off.")
    }
  }

  peek() {
    return this.data
  }

  empty() {
    return Object.keys(this.data).length === 0
  }
}


var reverseVowels = function(s) {
  let stack = new Stack()
  s = s.split('')
  for(var i = 0; i < s.length; i++) {
    let currentLetter = s[i]
    if(currentLetter == 'a' || currentLetter == 'e' || currentLetter == 'i' || currentLetter == 'o' || currentLetter == 'u') {
      if(stack.empty()) {
        stack.push(currentLetter)
      }
      else {
        s[i] = stack.pop()
      }
    }
  }
  console.log(s)
};

reverseVowels('hello')
