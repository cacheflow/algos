var groupAnagrams = function(strs) {
  let str = strs.join(' ')
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
  let len = Object.keys(obj).length
};


let strs = ["eat", "tea", "tan", "ate", "nat", "bat"]


groupAnagrams(strs)
