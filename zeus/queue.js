class Queue {
  constructor() {
    this.data = {}
    this.internalIndex = 0;
    this.externalIndex = 0;
  }

  enqueue(data) {
    const {internalIndex} = this;
    if(data != undefined || data != null) {
      this.data[internalIndex] = data
      this.internalIndex++
    }
  }

  dequeue() {
    const {internalIndex, externalIndex} = this
    if(internalIndex !== externalIndex) {
      let deletedData = this.data[externalIndex]
      delete this.data[externalIndex]
      ++this.externalIndex
      return deletedData
    }
    else {
      throw new Error("Nothing to dequeue")
    }
  }
}

let q = new Queue()

q.enqueue('wow')
q.enqueue('dogs')

console.log(q.dequeue())
console.log(q.dequeue())
q.dequeue()
