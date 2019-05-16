const arr = [9, 2, 5, 6, 4, 3, 7, 10, 1, 12, 8, 11];

function quickSort(arr) {
  if(!arr || !Array.isArray(arr)) {
    return [];
  }
  if(arr.length === 0 || arr.length === 1) {
    return arr;
  }
  let left = [];
  let right = [];
  let pivot = arr[0];

  for(var i = 1; i < arr.length; i++) {
    if(arr[i] < pivot) {
      left.push(arr[i])
    }
    else {
      right.push(arr[i])
    }
  }
  return [
    ...quickSort(left),
    pivot,
    ...quickSort(right)
  ]
}

let res = arr.slice().sort((a, b) => {
  return a - b
})

const qs = quickSort(arr);

console.log(res.every((el, index) => {
  return el === qs[index]
}))