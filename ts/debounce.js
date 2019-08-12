

let debounce = (fn, delay) => {
  let timer = null 
  return function() {
    let context = this 
    let args = args 
    clearTimeout(timeout) 
    timer = setTimeout(() => {
      fn.apply(this, args)
    }, delay || 300)
  }
}
