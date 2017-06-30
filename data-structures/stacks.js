//LIFO: The last one in is the first one out, so if we
// add 1, 2, 3. 3 is the last one out.


class Stack {
  constructor() {
    this.storage = {}
    this.index = 0;
  }

  push(data) {
    this.storage[++this.index] = data
  }

  pop() {
    if(this.index) {
      let deletedData = this.storage[this.index]
      --this.index
      return deletedData
    }
    else {
      throw new Error("Nothing to pop off")
    }
  }
}


let s = new Stack()
