const call = (key, ...args) => context => context[key](...args)

let arr = [1, 2, 3]

arr.forEach(a => call('map', x => 2 * x))
