'use strict'

class DoublyNode {
  constructor(value) {
    this.data = value;
    this.previous = null
    this.next = null
  }
}

class SinglyNode {
  constructor(value) {
    this.data = value;
    this.next = null
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null
    this.length = 0
  }

  add(data) {
    let currentNode = this.head
    let newNode = new Node(data)

    if(currentNode == null)  {
      this.head = newNode
    }
    else {
      while(currentNode.next) {
        currentNode = currentNode.next
      }
      currentNode.next = newNode

    }
    ++this.length
    return newNode
  }

  removeAt(position) {
    let currentNode = this.head
    let count = 0
    if(position == 0) {
      this.head = currentNode.next
    }
    else {
      while(count < position) {
        previousNode = currentNode
        currentNode = currentNode.next
        count++
      }
      previousNode.next = currentNode.next
      --this.length
    }
  }

  addAt(position, data) {
    let currentNode = this.head
    let newNode = new Node(data)
    let previousNode;

    if(position == 0) {
      newNode.next = currentNode
      this.head = newNode
    }
    else {
      while(currentNode.next) {
        previousNode = currentNode
        currentNode = currentNode.next
      }
      previousNode.next = newNode
      newNode.next = currentNode
    }
  }
}



class DoublyLinkedList {
  constructor() {
    this.length = 0
    this.head = null
    this.tail = null
  }

  add(data) {
    let tail = this.tail
    let head = this.head
    let length = this.legnth
    let newNode = new DoublyNode(data)

    if(this.length) {
        this.tail.next = newNode
        newNode.previous = this.tail
        this.tail = newNode
    }
    else {
      this.head = newNode
      this.tail = newNode
    }
    ++this.length
  }

  remove(data) {
    let currentNode = this.head
    let tail = this.tail
    let head = this.head
    if(data == this.head.data) {
      this.head = this.head.next
      this.head.previous = null
    }
    if(data == this.tail.data) {
      this.tail = this.tail.previous
      this.tail.next = null
    }
    while(currentNode.data != data) {
      currentNode = head.next
      currentNode.previous.next = currentNode.next
      currentNode.next.previous = currentNode.previous
    }
    --this.length
  }

  searchNodeAt(position) {
    let currentNode = this.head
    let length = this.length
    let count = 0;
    let foundNode;
    if(position < 0 || position > length) {
      throw new Error('Passed invalid position.')
    }
    if(length == 0) {
      throw new Error("No nodes in list to search for.")
    }
    if(position == 0) {
      return this.head
    }
    while(count < position) {
      currentNode = currentNode.next
      count++
    }
    return currentNode
  }

  addAt(position, data) {
    let tail = this.tail;
    let head = this.head;
    let currentNode = this.head;
    let newNode = new DoublyNode(data)
    let previousNode;
    let count = 0
    if(position == 0) {
      this.head.previous = newNode
      newNode.next = this.head
      this.head = newNode
    }
    else {
      while(count < position) {
        currentNode = currentNode.next
        count++
      }
      if(currentNode == this.tail) {
        this.tail.next = newNode
        newNode.previous = this.tail
        this.tail = newNode
      }
      else {
        currentNode.previous.next = newNode
        currentNode.next.previous = newNode
        newNode.previous = currentNode.previous
        newNode.next = currentNode
        currentNode.previous = newNode
      }
    }
    ++this.length
  }

  removeAt(position) {
    let tail = this.tail;
    let head = this.head
    let currentNode = this.head
    let count = 0;
    let length = this.length;
    let previousNode;

    if(length) {
      if(position > length || position < 0){
        throw new Error('You did not pass a valid position.')
      }
      if(position == 0) {
          this.head = currentNode.next
          this.head.previous = null
      }
      else {
        while(count < position) {
          previousNode = currentNode
          currentNode = currentNode.next
          count+=1
        }
        if(previousNode == tail) {
          this.tail = previousNode.previous
          this.tail.next = null
        }
        if(currentNode == null) {
          throw new Error("Did not find a node at that position.")
        }
        else {
          currentNode.previous.next = currentNode.next
          currentNode.next.previous = currentNode.previous
        }
      }
      --this.length
    }
  }
}


class CirculrSinglyLinkedList {
  constructor() {
    this.length = 0;
    this.head = null
  }

  add(data) {
    let currentNode = this.head
    let newNode = new SinglyNode(data)
    let count = 0;
    let length = this.length

    if(!currentNode) {
      this.head = newNode
      this.head.next = newNode
    }
    else {
      while(count < length) {
        currentNode = currentNode.next
        count++
      }
      if(count == length) {
        currentNode.next = newNode
        newNode.next = this.head
      }
    }
    ++this.length
  }
}
