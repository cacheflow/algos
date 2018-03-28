class Node {
  constructor(data) {
    this.data = data
    this.prev = null
    this.next = null
  }
}


class DoublyLinkedList  {
  constructor() {
    this.length = 0
    this.head = null
    this.tail = null
  }


  add(data) {
    let newNode = new Node(data)

    if(this.length) {
      newNode.prev = this.tail
      this.tail.next = newNode
      this.tail = newNode
    }
    else {
      this.head = newNode
      this.tail = newNode
    }
    ++this.length
  }

  removeAt(index) {
    let currentNode = this.head
    let previousNode;

    if(index > this.length || index < 1 || !this.length) {
      throw new Error("No node with that index present.")
    }
    if(index === 1) {
      this.head = currentNode.next
      this.head.prev = null
    }
    else {
      let count = 0
      while(count < index) {
        previousNode = currentNode
        currentNode = currentNode.next
        count += 1
      }
      let isTail = previousNode === this.tail
      if(isTail) {
        this.tail = previousNode.prev
        this.tail.next = null
      }
      else {
        previousNode.prev.next = currentNode
        currentNode.prev = previousNode.prev
      }
    } 
    --this.length
  }


  remove(data) {
    let head = this.head
    let tail = this.tail
    let count = 0
    let currentNode = this.head
    let previousNode;

    if(this.length) {
      if(data === this.head.data) {
        this.head = currentNode.next
        this.head.prev = null
      }
      if(data === this.tail.data) {
        this.tail = tail.prev
        this.tail.next = null
      }
      else {
        while(currentNode.data !== data) {
          previousNode = currentNode
          currentNode = currentNode.next
        }
        previousNode.next = currentNode.next
        currentNode.next.prev = currentNode.prev
      }

      --this.length
    }
    else {
      throw new Error('Nothing to remove from empty linked list')
    }
  }
}

let d = new DoublyLinkedList()

d.add(1)
d.add(2)
d.add(3)
d.add(4)
d.add(5)
d.add(6)
d.add(7)

d.remove(6)
