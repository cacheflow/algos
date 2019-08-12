var buddyStrings = function(A, B) {
  if(A.length !== B.length)  {
    return false;
  }
  let i = 0;
  let swapCount = 0;
  while(i < A.length || i < B.length) {
    if(A[i] != B[i]) {
      
    }
    i++
  }
  return swapCount === 2
};

buddyStrings('aaaaaaabc', 'aaaaaaacb')
