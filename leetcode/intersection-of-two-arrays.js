var intersection = function(nums1, nums2) {
    let obj = {};
    if(nums1.length === 0 || nums2.length === 0) {
      return [];
    }
    nums1.forEach((n) => {
      obj[n] = n
    })
    let arr = [];
    nums2.forEach((n) => {
      if(!arr.includes(n) && n in obj) {
        arr.push(n)
      }
    })
    return arr
};


let nums1 = [1,2,2,1]
let nums2 = [2,2]
let s = intersection(
nums1,
nums2
)

console.log(s)
