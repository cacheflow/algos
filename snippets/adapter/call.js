const call = ((key, ...args) => {
  return ((context) => {
    console.log("context is ", context)
    console.log("key is ", key, "args are ", ...args)
    return context[key](...args)
  })
})


Promise.resolve([1, 2, 3])
  .then(call('reduce', ((x, b) => {
    return x + b
  })))
  .then(console.log); //[ 2, 4, 6 ]
const map = call.bind(null, 'reduce');
Promise.resolve([1, 2, 3])
  .then(map(x => 2 * x))
  .then(console.log)
