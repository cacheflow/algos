var containsNearbyDuplicate = function(nums, k) {
 let map = new Map()
 for(var i = 0; i < nums.length; i++) {
   if(map.has(nums[i]) && (i - map.get(nums[i])) <= k) {
     console.log("difference is ", i - map.get(nums[i]))
     return true
   }
   map.set(nums[i], i)
 }
 return false
};

containsNearbyDuplicate([-1, -1], 1)


// Given an array of integers and an integer k, find out whether there are
// two distinct indices i and j in the array such that nums[i] = nums[j] and
// the absolute difference between i and j is at most k.
