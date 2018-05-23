class Queue {
  constructor() {
    this.data = {}
    this.internalIndex = 0;
    this.externalIndex = 0;
  }

  enqueue(data) {
    if(data) {
      this.data[this.internalIndex++] = data
    }
  }

  dequeue(){
    if(this.internalIndex !== this.externalIndex) {
      let deletedData = this.data[this.externalIndex]
      delete this.data[this.externalIndex]
      ++this.externalIndex
      return deletedData
    }
    else {
      throw new Error("Nothing to dequeue")
    }
  }
}


let q = new Queue()

q.enqueue("a")
q.enqueue("b")
q.enqueue("c")

console.log(q.dequeue())
console.log(q.dequeue())
console.log(q.dequeue())
q.dequeue()
