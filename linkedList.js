const Node = (data) => {
  this.data = data
  this.next = null;
}

const SinglyList =  () => {
  this._length = 0;
  this.head = null;
}

SinglyList.prototype.add = (value) => {
  let node = new Node(value)
  currentNode = this.head;

  //if head is
  if(!currentNode) {
    this.head = node
    this._length++;
    return node
  }

  while(currentNode.next) {
    currentNode = currentNode.next
  }

  currentNode.next = node;

  this._length++

  return node;
}


SinglyList.prototype.searchNodeAt = (position) => {
  let currentNode = this.head
  let length = this._length
  count = 1
  message = {failure: 'Failure: non-existent node in this list.'};

  if(length === 0 || position < 1 || position > length) {
    throw new Error(message.failure)
  }
  while (count < position) {
    currentNode = currentNode.next
    count++;
  }
  return currentNode
}

Singlylist.prototype.remove = (position) => {
  let currentNode = this.head
  let length = this._length
  let count = 0
  message = {failure: 'Failure: non-existent node in this list.'};
  beforeNodeToDelete = null;
  nodeToDelete = null;
  deleteNode = null;

  if(position < 0 || position > length) {
    throw new Error(message.failure)
  }

  if(position === 1) {
    this.head = currentNode.next
    deletedNode = currentNode
    currentNode = null
    this._length;

    return deleteNode
  }

  while(count < position) {
    beforeNodeToDelete = currentNode;
    nodeToDelete = currentNode.next;
    count++
  }

  beforeNodeToDelete.next = nodeToDelete.next;
  deletedNode = nodeToDelete;
  nodeToDelete = null;
  this._length--; 

  return deletedNode
}
