class PubSub {

  constructor() {
    this.events = {}
  }

  on (eventName, fn) {
    this.events[eventName] = this.events[eventName] || [];
    this.events[eventName].push(fn)
  }

  off (eventName, fn) {
    if (this.events[eventName]) {
      for(let i = 0; i < this.events[eventName].length; i++) {
        if (this.events[eventName][i] === fn) {
          console.log('hello', fn)
          this.events[eventName].splice(i, 1);
          break;
        }
      }
    }
  }

  emit (eventName, data) {
    if (this.events[eventName]) {
      this.events[eventName].forEach((fn) => {
        fn(data)
      })
    }
  }

  listeners() {
    return this.events
  }
}

let e = new PubSub()

let fn = (data) => console.log('hello world', data)
let copyOfFn = fn;

console.log('functions are the same ', fn === copyOfFn)
// e.on('wow', fn)
//
//
// e.off('wow', fn)
