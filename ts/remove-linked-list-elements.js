function ListNode(val) {
  this.val = val
  this.next = null
}

let removeElements = function(head, val) {
  let currentNode = head
  let previousNode;
  while( currentNode.val !== null ) {
    previousNode = currentNode
    currentNode = currentNode.next
  }
  previousNode.next = currentNode.next.next
};


// let a = Array.apply(null, {length: 10}).map(Number.call, Number)
