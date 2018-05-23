const unary = fn => val => fn(val)

let cb = (a) => a + 'wow'

let a = ['lex', 'is', 'cool'].map(unary(cb))

console.log(a)
