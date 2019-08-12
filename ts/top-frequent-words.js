var topKFrequent = function(words, k) {
  if(words === null || words.length == 0) {
    return false
  }
  let obj = {}
  words.forEach((w) => {
    if(!(w in obj)) {
      obj[w] = 1
    }
    else {
      obj[w]++
    }
  })
  let arr = []
  Object.keys(obj).forEach(k => arr.push([k, obj[k]]))
  let sortedByFreq = arr.sort((a, b) => {
    let secondWordFreq = b[1]
    let firstWordFreq = a[1]

    if(b[1] > a[1]) {
      //if second word is more frequent than move it to the front.
      return 1
    }
    if(b[1] < a[1]) {
      //if first word is more frequent than move it to the back.
      return -1
    }
    if(a[1] === b[1]) {
      //if frequencies are equal check the actual words.
      if(a[0] > b[0]) {
        //if the first word is larger than the second move it to the front.
        return 1
      }
      if(a[0] < b[0]) {
        //if the second word is larger than the first move it to the front.
        return -1
      }
    }
  })
  console.log(sortedByFreq)
  // let newArr = sortedByFreq.slice(0, k)
  // let res = newArr.map(a => a[0])
  // return res
};

// let output = ["indbvb","oic","sviavwoxss","bwowfvira","ledleb","rxgw","jlmetsplg","bxlr","dmhuq","hnnftqf","wnfbo","cub","ckqqibnx","ous","abxvhyehv","rmrypv","zgsedk","hfhlfqzkcn","amarxpg","zddeno","zfkgsudxq","alkq","bgfvfa","ehd","ptk","hdmvplne","ypzfk","ouy","bxjxpfp","rlmdt","fwxulnpit","ijww","jdbgvc","jlgfgwb","ppn","nmclxk","mgqj","gucayxp","jxkvrmajri","bklij","oldainprua"]
// let expected = ["indbvb","oic","sviavwoxss","bwowfvira","jlmetsplg","ledleb","rxgw","bxlr","dmhuq","hnnftqf","wnfbo","ckqqibnx","cub","ous","abxvhyehv","rmrypv","zgsedk","amarxpg","hfhlfqzkcn","zddeno","zfkgsudxq","alkq","bgfvfa","ehd","ptk","bxjxpfp","hdmvplne","ouy","rlmdt","ypzfk","fwxulnpit","ijww","jdbgvc","jlgfgwb","ppn","bklij","gucayxp","jxkvrmajri","mgqj","nmclxk","oldainprua"]
//
// let i = 0
// let str = ""
// while(i < output.length) {
//   if(output[i] != expected[i]) {
//     str += ` \nExpected ${expected[i]} but got ${output[i]} at ${i} \n`
//   }
//   i++
// }
let arr = ["rmrypv","zgsedk","jlmetsplg","wnfbo","hnnftqf","bxlr","sviavwoxss","jdbgvc","zddeno","rxgw","hnnftqf","hdmvplne","rlmdt","jlmetsplg","ous","rmrypv","fwxulnpit","dmhuq","rxgw","ledleb","bxlr","indbvb","ckqqibnx","cub","ijww","ehd","hfhlfqzkcn","sviavwoxss","rxgw","bxjxpfp","mgqj","oic","ptk","fwxulnpit","ijww","sviavwoxss","bgfvfa","zfkgsudxq","alkq","dmhuq","zddeno","rxgw","zgsedk","amarxpg","bgfvfa","wnfbo","sviavwoxss","sviavwoxss","alkq","nmclxk","zgsedk","bwowfvira","ous","bxlr","zddeno","rxgw","ous","wnfbo","rmrypv","sviavwoxss","ehd","zgsedk","jlmetsplg","abxvhyehv","ledleb","wnfbo","bgfvfa","bwowfvira","amarxpg","wnfbo","bwowfvira","dmhuq","ouy","bxlr","rxgw","oic","hnnftqf","ledleb","rlmdt","oldainprua","ous","ckqqibnx","dmhuq","hnnftqf","oic","jlmetsplg","ppn","amarxpg","jlgfgwb","bxlr","bwowfvira","hdmvplne","oic","ledleb","bwowfvira","oic","ptk","dmhuq","abxvhyehv","ckqqibnx","indbvb","ypzfk","rmrypv","bxjxpfp","amarxpg","dmhuq","sviavwoxss","bwowfvira","zfkgsudxq","wnfbo","rxgw","jxkvrmajri","cub","abxvhyehv","bwowfvira","indbvb","ehd","ckqqibnx","oic","ptk","hnnftqf","ouy","oic","zgsedk","abxvhyehv","ypzfk","ptk","sviavwoxss","rmrypv","oic","ous","abxvhyehv","hnnftqf","hfhlfqzkcn","ledleb","cub","ppn","zddeno","indbvb","oic","jlmetsplg","ouy","bwowfvira","bklij","gucayxp","zfkgsudxq","hfhlfqzkcn","zddeno","ledleb","zfkgsudxq","hnnftqf","bgfvfa","jlmetsplg","indbvb","ehd","wnfbo","hnnftqf","rlmdt","bxlr","indbvb","jdbgvc","jlmetsplg","cub","jlgfgwb","ypzfk","indbvb","dmhuq","jlmetsplg","zgsedk","rmrypv","cub","rxgw","ledleb","rxgw","sviavwoxss","ckqqibnx","hdmvplne","dmhuq","wnfbo","jlmetsplg","bxlr","zfkgsudxq","bxjxpfp","ledleb","indbvb","ckqqibnx","ous","ckqqibnx","cub","ous","abxvhyehv","bxlr","hfhlfqzkcn","hfhlfqzkcn","oic","ten","amarxpg","indbvb","cub","alkq","alkq","sviavwoxss","indbvb","bwowfvira","ledleb"]

// console.log(output.length == expected.length)
topKFrequent(arr, 41)
