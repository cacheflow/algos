const deepFlatten = (arr) => {
  return [].concat(...arr.map(a => Array.isArray(a) ? deepFlatten(a) : a))
}

console.log(deepFlatten([1, [2], [[3], 4], 5]))
