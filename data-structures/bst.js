class Bst {
  constructor(value) {
    this.value = value
    this.right = null 
    this.left = null
  }

  insert(value) {
    if(value <= this.value) {
      if(!this.left) this.left = new BST(value)
      else this.left.insert(value)
    }
    else if(value > this.value) {
      if(!this.right) {
        this.right = new BST(value)
      }
      else {
        this.right.insert(value)
      }
    }
  }

  contains(value) {
    if(this.value === value) return true
    if(value < this.value) {
      if(!this.left) return false 
      else return this.left.contains(value)
    }
    else if(value > this.value) {
      if(!this.right) return false 
      else return this.right.contains(value)
    }
  }

  depthFirstSearch(iteratorFunc, order) {
    if(this.order == 'pre-order') iteratorFunc(this.value)
    if(this.left) this.left.depthFirstSearch(iteratorFunc, order)
    if(order == 'in-order') iteratorFunc(this.value)
    if(this.right) this.right.depthFirstSearch(iteratorFunc, order)
    if(order == 'post-order') iteratorFunc(this.value)
  }

  breadthFirstTraversal (iteratorFunc) {
    let queue = [this]

    while(queue.length) {
      let treeNode = queue.shift()
      iteratorFunc(treeNode)

      if(treeNode.left) queue.push(treeNode.left)
      if(treeNode.right) queue.push(treeNode.right)
    }
  }

  getMinVal() {
    if(!this.left) {
      return this.value
    }
    else {
      return this.left.getMinVal()
    }
  }

  getMaxVal() {
    if(!this.right) {
      return this.value
    }
    else {
      return this.right.getMaxVal()
    }
  }
}

let b = new Bst("wow")

