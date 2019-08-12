
class SimpleSet {
  constructor() {
    this.values = {}
  }

  add(data) {
    const {values} = this
    if (!this.contains(data)) {
      values[data] = data
    }
  }

  remove(data) {
    if(this.contains(data)) {
      delete this.values[data]
    }
  }

  contains(data) {
    return this.values.hasOwnProperty(data)
  }

  union(set) {
    let ns = new SimpleSet()
    let vals = this.values
    Object.keys(vals).forEach(v => ns.add(v))
    Object.keys(set.values).forEach(v => ns.add(v))
    return ns
  }

  difference(set) {
    let ns = new SimpleSet()
    Object.keys(this.values).forEach((v) => {
      if(!set.contains(v)) {
        ns.add(v)
      }
    })
    return ns
  }

  intersect(set) {
    let ns = new SimpleSet()

    Object.keys(this.values).map((v) => {
      if(set.contains(v)) {
        ns.add(v)
      }
    })
    return ns
  }
}


let ss = new SimpleSet()

ss.add(1)
ss.add(2)
ss.add(3)

let ssTwo = new SimpleSet()

ssTwo.add(6)
ssTwo.add(5)
ssTwo.add(3)


console.log(ss.union(ssTwo)) 
