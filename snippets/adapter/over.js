const over = (...fns) => (...args) => fns.map(fn => fn.apply(null, args))

let a = (arg) => console.log("hello ", arg)
let b = (arg) => console.log("hello ", arg)

let o = over(a, b)
