class LruCache {
  constructor(size) {
    this.size = size
    this.data = {}
    this.lastUsed;
  }

  get(key) {
    if(key in this.data) {
      let data = this.data[key]
      return data
    }
    return -1
  }

  put(k, v) {
    if(this.size === Object.keys(this.data).length) {
      delete this.data[this.lastUsed]
    }
    this.lastUsed = k
    this.data[k] = v
    console.log("wow", this.data)
  }
}

let l = new LruCache(2)

l.put(1, 1)
l.put(2, 2)
l.put(4, 4)
l.put(5, 5)
l.put(6, 6)
l.put(7, 7)
