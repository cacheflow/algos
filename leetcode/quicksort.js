const nums = [1, 5, 3, 2, 4];

const quickSort = (arr) => {
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
    if(pivot > arr[i]) {
      left.push(arr[i])
    }
    else {
      right.push(arr[i])
    }
  }
  return [...quickSort(left), pivot, ...quickSort(right)];
}

console.log(quickSort(nums))
