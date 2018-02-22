const overArgs = (fn, transforms) => (...args) =>  fn(...args.map((val, i) => {
  transforms[i](val)
}))


const sq = (x) => x * x

const double = (x) => x * 2

const fn = overArgs((x, y) => [x,y], [sq, double])

console.log(fn(9, 3))
