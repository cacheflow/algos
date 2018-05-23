const all = (arr, fn = Boolean) => arr.every(fn);

let a = all(['lex', "is", "cool"], ((word) => {
  return typeof word === 'string'
}))

console.log(a)
