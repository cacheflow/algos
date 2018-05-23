const promisify = func => ((...args) => {
  console.log("func is ", func)
  new Promise((resolve, reject) => func(...args, (err, result) => {
    return (err ? reject(err) : resolve(result))
  }))
})

//come back to this


 const delay = promisify((d, cb) => setTimeout(cb, d))

 delay(2000).then(() => console.log('hello world'))
