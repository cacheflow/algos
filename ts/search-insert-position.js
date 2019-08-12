/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let curr = 0;
    let found = 0
    for(var i = 0; i < nums.length ; i++) {
      if (nums[target - ++curr] == target) {
        found = i
        return found
      }
      else if(nums[target - curr] != target) {
        found = i + 1
      }
    }
    return found
    // return found <= 0 ? 0 : found
};

//
// console.log(searchInsert([1,3,5,6], 5))
// console.log(searchInsert([1,3,5,6], 2))
// console.log(searchInsert([1,3,5,6], 7))
// console.log(searchInsert([1,3,5,6], 7))
// console.log(searchInsert([1,3,5,6], 0))


let binarySearch = (nums, target) => {
  let beginning = 0
  let end  = nums.length - 1
  let middle;
  while(beginning <= end) {
    middle = Math.floor( (beginning + end) / 2 )
    if(target >= nums[middle]) {
      beginning = middle + 1
      //eliminates left
    }
    else {
      end = middle - 1
      //eliminates right
    }
  }
  return beginning
}

let nums = [1, 2, 3, 4]

let arr = []

let i = 0



console.log(binarySearch([1, 2, 3, 4], 5))
