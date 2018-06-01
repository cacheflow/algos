const hasCycle = (node) => {
  if(node == null) {
    return node
  }
  let fast = node.next
  let slow = node
  while(slow != null && fast != null && fast.next != null) {
    if(fast === slow) {
      return true
    }
    fast = fast.next.next
    slow = slow.next
  }
  return false 
}
