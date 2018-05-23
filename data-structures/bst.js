class Node {
  constructor(val) {
    this.right = null
    this.left = null
    this.val = val
  }
}

class Bst {
  constructor() {
    this.root = null
  }

  insert(val, currentNode = this.root) {
    if(!currentNode) {
      this.root = new Node(val)
      return;
    }
    if(currentNode.val > val) {
      if(!currentNode.left) {
        currentNode.left = new Node(val)
        return;
      }
      this.insert(val, currentNode.left)
    }
    else {
      if(!currentNode.right) {
        currentNode.right = new Node(val)
        return;
      }
      this.insert(val, currentNode.right)
    }
  }

  contains(val) {
    let exists = false
    const recurse = (node) => {
      if(node.val === val) {
        exists = true
      }
      else if(node.left !== null && val < node.val) {
        recurse(node.left)
      }
      else if(node.right !== null && val > node.val) {
        recurse(node.right)
      }
    }
    recurse(this.root)
    return exists
  }

  print() {
    return this.root
  }
}

let b = new Bst()

for(var i = 0; i < 10; i++) {
  b.insert(i)
}

console.log(b.contains(2))
