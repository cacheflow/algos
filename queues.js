//First In First Out
//enqueue add to the end think for example push in JS
//dequeue removes from the front and returns

class Queue {
	constructor() {
		this._storage = {}
		this._customerIndex = -1;
		this._employeeIndex = -1
	}

	peek() {
		return this._storage[this._employeeIndex]
	}

	enqueue(data) {
		this._storage[this._customerIndex] = data
		this._storage[this._customerIndex++]
	}

	dequeue() {
		if(this._customerIndex != this._employeeIndex) {
			let deletedData = this._storage[this._employeeIndex]
			delete this._storage[this._employeeIndex]
			this._employeeIndex++
			return deletedData
		}
		else {
			throw new Error("Nothing to dequeue")
		}
	}
}
