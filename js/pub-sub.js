class PubSub {
  constructor() {
    this.events = {};
  }

  on(eventName, fn) {
    if (!eventName) {
      throw new Error('Must pass in an event name')
    }
    if (!fn) {
      throw new Error('Must pass in a function.')
    }
    if (!(typeof fn === 'function')) {
      throw new Error('fn argument is not a function.')
    }
    this.events[eventName] = this.events[eventName] || [];
    this.events[eventName].push(fn);
  }

  off(eventName, fn) {
    if (this.events[eventName]) {
      for (let i = 0; i < this.events[eventName].length; i++) {
        if (this.events[eventName[i]] === fn) {
          this.events[eventName].splice(i, 1);
          break;
        }
      }
    }
  }

  emit(eventName, data) {
    if (this.events[eventName]) {
      this.events[eventName].forEach((fn) => {
        fn(data)
      })
    }
  }

  listeners() {
    return this.events;
  }
}