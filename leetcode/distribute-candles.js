/**
 * @param {number[]} candies
 * @return {number}
 */
var distributeCandies = function(candies) {
  if(candies.length % 2 === 1) {
    return 0
  }
  let max = Math.floor(candies.length / 2)
  let sister = [];
  let brother = [];
  for(var i = 0; i < candies.length; i++) {
   if( (!sister.includes(candies[i]) && sister.length !== max) ) {
      sister.push(candies[i])
   }
   if(brother.length !== max) {
     brother.push(candies[i])
   }
  }
  return sister.length
};

console.log(distributeCandies([1, 1, 2, 2, 3, 3]))
