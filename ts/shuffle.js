let list = [1, 2, 3, 4]
let listCopy = list.slice(0)
  let currentIndex = listCopy.length
  let tempVal;
  let randomIndex;
  while(0 !== currentIndex) {
    
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex -= 1
    tempVal = listCopy[currentIndex]
    listCopy[currentIndex] = listCopy[randomIndex]
    listCopy[randomIndex] = tempVal
  }
  return listCopy