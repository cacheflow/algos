var groupAnagrams = function(strs) {
  let obj = {}
  if(strs == null || strs.length == 0) {
    return []
  }
  for(var i = 0; i < strs.length; i++) {
    let wordArr = strs[i].split('')
    let sorted = wordArr.slice(0).sort().join('')
    let str = wordArr.join('')
    if(!obj.hasOwnProperty(sorted)) {
      obj[sorted] = [str]
    }
    else {
      obj[sorted].push(str)
    }
  }
  return Object.keys(obj).reverse().map(k => obj[k])
};


let strs = ["eat", "tea", "tan", "ate", "nat", "bat"]


groupAnagrams(strs)


//Time complexity is O(N K log(k))
//where n is the length of the array and k is the length of each string
//and log(k) is the sorting operation and outer loop has O(N).
