//LIFO: The last one in is the first one out, so if we
// add 1, 2, 3. 3 is the last one out.

class Stack {
  constructor() {
    this._storage = {};
    this._index = 0;
  }

  push(data) {
    let size = this._index+=1
    this._storage[size] = data
    console.log("index in push is ", this._index)
  }

  pop() {
    if(this._index) {
      let index = this._index
      let deletedData = this._storage[index]
      delete this._storage[this._index]
      --this._index
      return deletedData
    }
    else {
      return "Nothing to delete."
    }
  }
}
