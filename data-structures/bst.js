class Node {
  constructor(val) {
    this.val = val
    this.left = null
    this.right = null
  }
}
class Bst {
  constructor() {
    this.root = null
  }

  insert(val) {
    let root = this.root
    if(!root) {
      this.root = new Node(val)
      return;
    }

    let currentNode = root

    if(currentNode.val <= newNode.val) {
      if(!currentNode.left) {
        currentNode.left = new Node(val)
      }
      else {
        currentNode.insert(newNode)
      }
    }
    else if(val > currentNode.val) {
      if(!currentNode.right) {
        currentNode.right = new Node(val)
      }
      else {
        currentNode.insert(val)
      }
    }
  }


  print() {
    return this.root
  }
}

let b = new Bst()
let i = 0
while(i < 10) {
  b.push(i)
  i++
}
//https://hackernoon.com/data-structures-in-javascript-pt-1-binary-search-trees-2c231cf2c8e1
//https://initjs.org/implement-a-binary-search-tree-in-javascript-952a44ee7c26
