class LruCache {
  constructor(size = 2) {
    this.size = size
    this.map = {}
    this.head = null
    this.tail = null
  }

  getLength() {
    return Object.keys(this.map).length
  }

  set(key, val) {
    let len = this.getLength()
    let node = new Node(key, val)
    let keyExists = (key in this.map)
    if(keyExists) {
      this.map[key].val = node.val
      this.remove(node.key)
    }
    else {
      if(len >= this.size) {
        delete this.map(this.tail.key)
        this.size--
        this.tail = this.tail.prev
        this.tail.next = null
      }
    }
    this.setHead(node)
  }

  get(key) {
    if(this.map[key]) {
      let value = this.map[key].val
      let node = new Node(key, value)
      this.remove(key)
      this.setHead(node)
      return value
    }
    console.log(`Key ${key} does not exist`)
  }

  setHead(node) {
    node.next = this.head
    node.prev = null
    if(this.head !== null) {
      this.head.prev = node
    }
    this.head = node
    if(this.tail === null) {
      this.tail = node
    }
    this.size++
    this.map[node.key] = node
  }

  remove(key) {
    let node = this.map[key]
    if(node.prev !== null) {
      node.prev.next = node.next
    }
    else {
      this.head = node.next
    }
    if(node.next !== null) {
      node.next.prev = node.prev
    }
    else {
      this.tail = node.prev
    }
    delete this.map[key]
    --this.size
  }
}


class Node {
  constructor(key, val) {
    this.key = key
    this.val = val
    this.prev = null
    this.next = null
  }
}

let l = new LruCache(2)

l.set(2, 2)
l.set(1, 1)
l.set(3, 3)
