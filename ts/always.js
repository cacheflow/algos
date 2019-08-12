const always = (val) => () => val

const helloWorld = always('hello world')

console.log(helloWorld())
