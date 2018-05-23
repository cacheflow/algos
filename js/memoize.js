const memoize = (f) => (...args) => {
  let cache = {}
  let data = JSON.stringify(args)
  cache[data] = cache[data] || f(...args)
  return cache[data]
}


const addNum = memoize(x => x + x)

console.log(addNum(4))
