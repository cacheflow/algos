let arr = [1, 2, 3, 4, 5, 6, 7]

for(var i = arr.length - 1; i > 0; i--) {
  let randIndex = Math.floor(Math.random() * (i + 1))
  let currEl = arr[i]
  let randEl = arr[randIndex]
  arr[randIndex] = arr[i]
  arr[i] = randEl
}

console.log(arr)
