//First In First Out
//enqueue add to the end think for example push in JS
//dequeue removes from the front and returns

class Queue {
  constructor() {
    this.storage = {}
    this.internalIndex = 0
    this.externalIndex = 0; 
  }
  
  enqueue(data) {
    if(data) {
      this.storage[this.internalIndex] = data 
      ++this.internalIndex
    }
  }
  
  dequeue() {
    if(this.internalIndex != this.externalIndex) {
      let deletedItem = this.storage[this.externalIndex]
      delete this.storage[this.externalIndex]
      ++this.externalIndex
      return deletedItem
    }
    else {
      throw new Error("Nothing to dequeue")
    }
  }
}

let q = new Queue()

q.enqueue("dogs")
q.enqueue("cats")

q.dequeue()
q.dequeue()
q.dequeue()