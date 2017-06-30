//First In First Out
//enqueue add to the end think for example push in JS
//dequeue removes from the front and returns

class Queue {
	constructor() {
		this.storage = {}
		this.internalIndex = 0
		this.externalindex = 0
	}

	enqueue(data) {
		this.storage[this.externalindex] = data
		++this.externalindex
	}

	dequeue() {
		if(this.internalIndex != this.externalindex) {
			let nextItem = this.storage[this.internalIndex]
			delete this.storage[this.internalIndex]
			++this.internalIndex
			return nextItem
		}
		else {
			throw new Error("Nothing else to dequeue")
		}
	}

	peek() {
		return this.storage[this.internalIndex]
	}

	size() {
		return this.internalIndex - this.externalindex
	}
}


let q = new Queue()

q.enqueue("1")
q.enqueue("2")
q.enqueue("3")

console.log(q.dequeue())
console.log(q.dequeue())
console.log(q.dequeue())
console.log(q.dequeue())
