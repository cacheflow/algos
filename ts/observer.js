//The Observer is a design pattern where an object 
//(known as a subject) maintains a list of objects 
//depending on it (observers), automatically notifying them of any changes to state.


class ObserverList() {
  constructor() {
    this.observerList = [];
  }

  add(obj) {
    return this.observerList.push(obj)
  }

  count() {
    return this.observerList.length 
  }

  get(index) {
    if(index > -1 && index < this.observerList.length) {
      return this.observerList[index]
    }
  }

  indexOf(obj, startIndex) {
    let i = startIndex;
    while(i < this.observerList.length) {
      if(this.observerList[i] === obj) {
        return i
      }
      i++
    }
    return -1;
  }

  remvoeAt(index) {
    if(index > this.count) {
      throw new Error("Invalid index given")
    }
    this.observerList.splice(index, 1)
  }
}


class Subject() {
  constructor() {
    this.observers = new ObserverList()
  }

  addObserver(observer) {
    this.observers.add(observer)
  }

  removeObserver(observer) {
    this.observers.remvoeAt(this.observers.indexOf(observer, 0))
  }

  notify(context) {
    let observerCount = this.observers.count()
    for(var i = 0; i < observerCount; i++) {
      this.observers.get(i).update(context)
    }
  }
}
