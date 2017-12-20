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
    this.length = 0;
    this.head = null;
  }

  add(data) {
    let currentNode = this.head;
    let newNode = new SinglyNode(data)

    if(!currentNode) {
      this.head = newNode
    }
    else {
      while(currentNode.next) {
        currentNode = currentNode.next
      }
      currentNode.next = newNode
    }
    ++this.length
  }

  search(position) {
    let length = this.length
    let counter = 0;
    let currentNode = this.head
    if(position > length || position < length) {
      throw new Error("Invalid position passed.")
    }
    else {
      while(counter < position) {
        currentNode = currentNode.next
        counter++
      }
    }
    return currentNode
  }

  remove(data) {
    let length = this.length
    let counter = 0;
    let currentNode = this.head
    let previousNode;
    if(currentNode.data == data) {
      this.head = currentNode.next
    }
    else {
      while(currentNode.data != data) {
        previousNode = currentNode
        currentNode = currentNode.next
      }
      previousNode.next = currentNode.next
    }
    return this.head
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
    let head = this.head
    let newNode = new SinglyNode(data)
    let count = 0;
    let length = this.length

    if(!currentNode) {
      this.head = newNode
      this.head.next = newNode
    }
    else {
      if(this.head == this.head.next) {
        this.head.next = newNode
        newNode.next = this.head
      }
      else {
        while(currentNode.next != head) {
          currentNode = currentNode.next
        }
        currentNode.next = newNode
        newNode.next = this.head
      }
    }
    ++this.length
  }

  remove(data) {
    let currentNode = this.head;
    let head = this.head
    let length = this.length;
    let previousNode;
    let tail;
    if(length) {
      if(currentNode.data == data) {
        this.head = currentNode.next
        while(currentNode.next !== head) {
          currentNode = currentNode.next
        }
        currentNode.next = this.head
      }
      else {
        while(currentNode.data !== data) {
          previousNode = currentNode
          currentNode = currentNode.next
        }
        previousNode.next = currentNode.next
      }
      --this.length
    }
  }

  removeAt(position) {
    let length = this.length
    let currentNode = this.head
    let count = 0;
    let previousNode;
    let tail = this.getTail()

    if(position < 0 || position > length) {
      throw new Error("Invalid position provided")
    }
    if(position == 0) {
      this.head = currentNode.next
      tail.next = this.head
    }
    else {
      while(count < position) {
        previousNode = currentNode
        currentNode = currentNode.next
        count++
      }
      previousNode.next = currentNode.next
    }
    --this.length
  }

  addAt(position, data) {
    let length = this.length;
    let currentNode = this.head
    let newNode = new SinglyNode(data)
    let count = 0;
    let tail = this.getTail()
    let previousNode;

    if(position < 0 || position > length) {
      throw new Error("Invalid position")
    }
    if(length) {
      if(position == 0) {
        this.head = newNode
        this.head.next = currentNode
        tail.next = newNode
      }
      while(count < position) {
        previousNode = currentNode
        currentNode = currentNode.next
        count++
      }
      if(currentNode == tail) {
        tail.next = newNode
        newNode.next = this.head
      }
      previousNode.next = newNode
      newNode.next = currentNode
    }
    ++this.length
  }

  getTail() {
    let currentNode = this.head
    let head = this.head

    while(currentNode.next !== head) {
        currentNode = currentNode.next
    }
    return currentNode
  }

  searchNodeAt(position) {
    let length = this.length
    let count = 0;
    let currentNode = this.head
    if(position > length || position < 0) {
      throw new Error("Invalid position passed")
    }
    if(length == 0) {
      throw new Error("No nodes to search for")
    }
    while(count < position) {
      currentNode = currentNode.next
      count++
    }
    return currentNode
  }
}


class CircularDoublyLinkedList {
  constructor() {
    this.length = 0;
    this.tail = null;
    this.head = null;
  }

  add(data) {
    let currentNode = this.head
    let tail = this.tail
    let head = this.head
    let length = this.length
    let newNode = new DoublyNode(data)

    if(length) {
      tail.next = newNode
      newNode.previous = tail
      this.tail = newNode
      newNode.next = this.head
      head.previous = newNode
    }
    else {
      this.head = newNode
      this.tail = newNode
      newNode.next = newNode
      newNode.previous = newNode
    }
    ++this.length
  }

  removeAt(position) {
    let head = this.head
    let tail = this.tail
    let length = this.length
    let currentNode = this.head
    let count = 0;
    let previousNode;

    position = parseInt(position)
    if(position < 0 || position > length) {
      throw new Error("Invalid position provided")
    }
    if(length) {
      if(position == 0) {
        this.head = currentNode.next
        this.tail.next = currentNode.next
        this.head.previous = this.tail
      }
      else {
        while(count < position) {
          previousNode = currentNode
          currentNode = currentNode.next
          count++
        }
        if(currentNode == tail) {
          this.tail = previousNode
          previousNode.next = this.head
          this.head.previous = previousNode
        }
        previousNode.next = currentNode.next
        currentNode.next.previous = previousNode
      }
    }
  }

  addAt(position, data) {
    let count = 0;
    let currentNode = this.head;
    let length = this.length
    let newNode = new DoublyNode(data)
    let tail = this.tail
    let previousNode;
    if(position < 0 || position > length) {
      throw new Error('Invalid position provided')
    }
    if(length) {
      if(position == 0) {
        currentNode.previous = newNode
        newNode.next = currentNode
        this.tail.next = newNode
        this.head.previous = newNode
      }
      else {
        while(count < position) {
          previousNode = currentNode
          currentNode = currentNode.next
          count++
        }
        if(currentNode == tail) {
          previousNode.next = newNode
          newNode.previous = previousNode
          newNode.next = currentNode
          this.tail = newNode
        }
      }
    }
  }

  remove(data) {
    let currentNode = this.head
    let head = this.head
    let tail = this.tail
    let length = this.length;
    let previousNode;

    if(length) {
      if(head.data == data) {
        this.tail.next = currentNode.next
        this.head.next.previous = currentNode.previous
        this.head = this.head.next
      }
      else {
        while(currentNode.data != data) {
          previousNode = currentNode
          currentNode = currentNode.next
        }
        previousNode.next = currentNode.next
        currentNode.next.previous = previousNode
      }
    }
  }

  searchNodeAt(position) {
    let length = this.length;
    let currentNode = this.head
    let count = 0;
    if(length) {
      if(position < 0 || position > length) {
        throw new Error("Passed an invalid position")
      }
      else {
        while(count < position) {
          currentNode = currentNode.next
          count++
        }
      }
      return currentNode
    }
  }
}


let s = new SinglyLinkedList()

s.add("1")
s.add("2")
s.add("3")

console.log(s.remove('2'))

// let s = new CircularDoublyLinkedList()
//
// s.add("2")
// s.add("4")
// s.add("5")
// s.add("7")
//
// s.searchNodeAt("3")
