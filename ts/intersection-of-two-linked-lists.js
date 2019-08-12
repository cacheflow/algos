var getIntersectionNode = function(headA, headB) {
    if(headA === null || headB === null) return null;
    let currentNodeA = headA;
    let currentNodeB = headB;
    let fastA;
    let fastB;

    while(currentNodeA !== null && currentNodeB !== null) {
      if(currentNodeA.val === currentNodeB.val) {
        console.log('intersected first if', currentNodeA.val)
        return currentNodeA.val
      }
      if(currentNodeA.next !== null && currentNodeB.next !== null) {
        if(currentNodeA.next.val === currentNodeB.next.val) {
          console.log('intersected second if ', currentNodeA)
          return currentNodeA.next.val
        }
        if(currentNodeA.next.val === currentNodeB.val) {
          console.log('intersected third if', currentNodeA)
          return currentNodeA
        }
      }
      currentNodeA = currentNodeA.next
      currentNodeB = currentNodeB.next
    }
    return null
};
