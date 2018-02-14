let chunk = (arr, size) => {
  let arrCount = Math.ceil(arr.length / size)
  let newArr = []
  let current = 0
  for(var i = 0; i < arrCount; i++) {
    newArr.push([])
  }
  for(var j = 0; j < arr.length; j++) {
    if(newArr[current].length == size) {
      current++
      newArr[current].push(arr[j])
    }
    else {
      newArr[current].push(arr[j])
    }

  }
}

let arr = Array.from({ length: Math.ceil(oldArr.length / size) }, (v, i) => {
  return oldArr.slice(i * size, i * size + size)
})



chunk(['a', 'b', 'c', 'd', 'e', 'b', 'y', 'z', 'x'], 7);
