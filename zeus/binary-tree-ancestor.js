class Node {
  constructor(data) {
    this.left = null
    this.right = null
    this.data = data
  }
}

class Bst {
  constructor() {
    this.root = null
  }
  insert(data, node = this.root) {
    let currentNode = node
    if(!this.root) {
      this.root = new Node(data)
      return;
    }
    if(currentNode.data > data) {
      if(!currentNode.left) {
        currentNode.left = new Node(data)
        return
      }
      else {
        this.insert(data, currentNode.left)
      }
    }
    else {
      if(!currentNode.right) {
        currentNode.right = new Node(data)
        return
      }
      else {
        this.insert(data, currentNode.right)
      }
    }
  }
  lowestCommonAncestor(root = this.root, n1, n2) {
    if(!root) {
      return null
    }
    if(root > Math.max(n1, n2)) {
      lowestCommonAncestor(root.left, n1, n2)
    }
    else if(root < Math.min(n1, n2)) {
      lowestCommonAncestor(root.right, n1, n2)
    }
    else {
      return root
    }
  }
}

let b = new Bst()

b.insert(100)
b.insert(99)
b.insert(102)

console.log(b.lowestCommonAncestor(100, 99))
