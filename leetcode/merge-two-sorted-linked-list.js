const LinkedList = require('../data-structures/linkedList.js')

let l1 = new LinkedList()
let l2 = new LinkedList()

//1->2->4, 1->3->4

let arr1 = [1, 2, 4]
let arr2 = [1, 3, 4]

arr1.forEach(n => l1.add(n))
arr2.forEach(n => l2.add(n))

let cachedHead = l1
l1 = l1.head
l2 = l2.head
let cached1 = l1
let cachedL2 = l2
while(l1.next != null && l2.next != null) {
  let L1Next = l1.next.next
  let L2Next = l2.next.next
  console.log(L1Next, L2Next)
  console.log(l1.data, l2.data)
  l1 = l1.next
  l2 = l2.next
}

cachedHead = cachedHead.head
while(cachedHead != null) {
  console.log("Currently at ", cachedHead.data)
  cachedHead = cachedHead.next
  // console.log("points to ", cachedHead.data)
}
