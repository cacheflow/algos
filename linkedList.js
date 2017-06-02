'use strict'

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class SinglyList {
  constructor() {
    this.head = null;
    this._length = 0;
  }

  add(value) {
    let newNode = new Node(value)
    let currentNode = this.head

    if(!currentNode) {
      this.head = newNode
      ++this._length
      return newNode
    }
    else {
      while(currentNode.next) {
        currentNode = currentNode.next
      }
      currentNode.next = newNode
      ++this._length
      return newNode
    }
  }

  searchNodeAt(position) {
    let currentNode = this.head
    let index = 0;
    let length = this._length;
    if(position < 0 || position > length) {
      throw new Error("Invalid position provided.")
    }
    else {
      while(index < position) {
        currentNode = currentNode.next
        index++
      }
      return currentNode
    }
  }

  getLenth() {
    return this._length
  }

  remove(data) {
    let currentNode = this.head
    let deletedNode;
    let previousNode;

    if(currentNode.data == data) {
      this.head = currentNode.next
      deletedNode = currentNode
      --this._length
      return deleteNode
    }
    else {
      while(currentNode.data != data) {
        previousNode = currentNode;
        currentNode = currentNode.next
      }
      previousNode.next = currentNode.next
      deletedNode = currentNode
      --this._length
      return this.head
    }
  }

  removeAt(position) {
    let currentNode = this.head
    let previousNode;
    let index = 0;
    let length = this._length;
    let deletedNode;

    if(position < 0 || position > length) {
      throw new Error("wrong position provided")
    }
    if (position == 0) {
      this.head = currentNode.next
      deletedNode = currentNode
      ++this._length
    }
    else {
      while(index <= position) {
        previousNode = currentNode
        currentNode = currentNode.next
        index++
      }
      console.log(currentNode)
      previousNode.next = currentNode.next
      deletedNode = currentNode
      --this._length
      return this.head
    }
  }

  addAt(index, element) {
    let node = new Node(element)
    let currentNode = this.head;
    let previousNode;

    let currentIndex = 0;

    if(index > this._length) {
      return false;
    }
    if(index == 0) {
      //reassign ahead to the next one after our newly added node.
      node.next = currentNode
      this.head = node
    }
    else {
      while(currentIndex < index) {
        previousNode = currentNode;
        currentNode = currentNode.next
        currentIndex++
      }
      node.next = currentNode
      previousNode.next = node
    }
    ++this._length
    let curretNode = this.head
  }
}


let s = new SinglyList()

s.add("a")
s.add("b")
s.add("c")
s.add("d")
console.log(s.removeAt(3))
