let indexOfAll = (arr, val) => {
  return arr.filter((currVal, i) => {
    return (currVal == val ? i : 0)
  })
}

console.log(indexOfAll([1, 2, 3, 1, 2, 3], 1)); // [0,3]
