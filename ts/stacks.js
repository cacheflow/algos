//LIFO: The last one in is the first one out, so if we
// add 1, 2, 3. 3 is the last one out.

class Stack {
  constructor() {
    this.storage = {}
    this.index = 0
  }
  
  push(data) {
    if(data) {
      this.storage[++this.index] = data
    }
  }
  
  pop() {
    if(this.index) {
      let deletedItem = this.storage[this.index] 
      delete this.storage[this.index]
      --this.index 
      return deletedItem
    }
    else {
      throw new Error("Nothing to pop off")
    }
  }
}

s = new Stack()
s.push("wow")
s.push("damn")

