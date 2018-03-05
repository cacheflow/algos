const pipeFunctions = (...fns) => fns.reduce((prev, next)) => {
  return (...args) => {
    g(f(...args))
  }
})
