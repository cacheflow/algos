const productOfOtherNumbers = (nums) => {
  let i = 0;
  let arr = []
  i = 0
  while(i <= 3) {
    let copyOfNums = nums.slice()
    let shuffled = shuffle(copyOfNums)
    arr.push(shuffled)
    i++
  }
  console.log(arr)
}

function shuffle (a) {
  var j, x, i;
  for(i = a.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    x = a[i];
    a[i] = a[j];
    a[j] = x;
  }
  return a
}

productOfOtherNumbers([1, 7, 3, 4])
