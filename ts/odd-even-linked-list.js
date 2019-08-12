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

  print() {
    return this
  }
}

i = 1;
let l = new SinglyLinkedList()

while(i <= 110) {
  l.add(i)
  i++
}


class Stack {
  constructor() {
    this.index = 0
    this.data = {}
  }

  push(data) {
    this.data[++index] = data
  }

  pop() {
    if(this.index) {
      let cachedData = this.data[index]
      delete this.data[index]
      --index
    }
    else {
      throw new Error("Nothing to pop off.")
    }
  }

  peek() {
    return this.data[index]
  }
}

var oddEvenList = function(head) {

    if(head != null) {
      head = head.head
      let odd = head
      let even = head.next
      let evenHead = even
      while(even != null && even.next != null) {
        let oddPointer = even.next
        let evenPointer = even.next.next
        odd.next = oddPointer
        even.next = evenPointer
        even = even.next
        odd = odd.next
      }
      odd.next = evenHead
    }
    return head
};

oddEvenList(l)
