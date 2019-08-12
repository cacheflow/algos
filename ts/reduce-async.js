
let reduceAsync = async (array, fn, value) => {
  for (let a of array) {
    value = fn(value, await a())
  }
  return value
}

let seq = array =>
  reduceAsync(array, (acc, value) => [...acc, value], [])
