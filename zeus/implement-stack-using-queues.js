class Stack {
  constructor() {
    this.data = {}
    this.index = 0;
  }

  push(data) {
    this.data[++this.index] = data
  }

  pop() {
    if(this.index <= 0) {
      throw new Error("Nothing to pop off")
    }
    let deletedData = this.data[this.index]
    delete this.data[this.index]
    --this.index
    return deletedData
  }

  top() {
    if(this.index <= 0) {
      throw new Error("Nothing to top off")
    }
    let cachedData = this.data[this.index]
    return cachedData
  }

  empty() {
    return this.index <= 0
  }
}


let s = new Stack()

s.push("damn it lex")
s.push("wow")
s.push("c")

console.log(s.pop())
console.log(s.pop())
console.log(s.pop())
