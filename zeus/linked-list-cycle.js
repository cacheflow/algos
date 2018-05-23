const detectLinkedListCycle = (node) => {
  if(node === null) {
    return false
  }
  let fast = head.next
  let slow = head
  while(slow !== null && fast !== null && fast.next !== null) {
    if(fast === slow) {
      return true
    }
    fast = fast.next.next
    slow = slow.next
  }
  return false
}
