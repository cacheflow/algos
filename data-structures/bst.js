class Node {
  constructor(data) {
    this.left = null
    this.right = null
    this.val = data
  }
}

class Bst {
  constructor() {
    this.root = null
  }

  insert(val, node = this.root) {
    let currentNode = node
    if(!currentNode) {
      this.root = new Node(val)
      return
    }
    if(val > currentNode.val) {
      if(!currentNode.left) {
        currentNode.left = new Node(val)
        return
      }
      this.insert(val, currentNode.left)
    }
    else {
      if(!currentNode.right) {
        currentNode.right = new Node(val)
        return
      }
      this.insert(val, currentNode.right)
    }
  }

  print() {
    return this.root
  }
}

let b = new Bst()
// let i = 0
// while(i < 10) {
//   b.insert(i)
//   i++
// }

let j = 500;

while(j > 100) {
  b.insert(j)
  j--
}

console.log(b.print())
//https://hackernoon.com/data-structures-in-javascript-pt-1-binary-search-trees-2c231cf2c8e1
//https://initjs.org/implement-a-binary-search-tree-in-javascript-952a44ee7c26
