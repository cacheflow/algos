const ary = (fn, n) => {
  return (...args) => {
    return fn(...args.slice(0, 1))
  }
}

const firstTwoMax = ary(Math.max, 2)

let arr = [ [2, 6, 'a'], [8, 4, 6], [10] ]


//Creates a function that accepts up to n arguments, ignoring any additional arguments.
