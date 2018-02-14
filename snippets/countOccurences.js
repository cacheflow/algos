const countOccurcnes = ((arr, val) => {
  let count = 0 
  return arr.reduce((acc, v) => {
    return (v == val) ? acc + 1 : acc + 0
  })
})


console.log(countOccurcnes([1, 1, 1, 1, 3], 1))
