var slide = function(arr)  {
  let currMax = 0 
  let globalMax = 0
  let lastPosition; 
  let i = 0
  let tempArr = []
  let placement = 0
  while(i < arr.length) {
   if(arr[i] > ) {

   }
   currMax = Math.max(arr[i == 0 ? i++ : i - 1], arr[i])
   globalMax = Math.max(globalMax, currMax)
   tempArr.push(globalMax)
   i++ 
  }
  console.log(tempArr)
}

let arr = [-4, 2, -5, 3, 6]
slide(arr)
