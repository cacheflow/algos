var topKFrequent = function(words, k) {
  let map = new Map()
  words.forEach((w) => {
    if(!map.has(w)) {
      map.set(w, 1)
    }
    else {
      map.set(w, map.get(w) + 1)
    }
  })
  let sortedByFreq = Array.from(map).sort((a, b) => {
    let firstWordFrequency = a[1]
    let secondWordFrequency = b[1]
    let frequenciesMatch = (firstWordFrequency === secondWordFrequency)
    let firstLetterlength = a[0]
    let secondLetterLength = b[0]

    if(b[1] > a[1]) {
      return 1;
    }
    if(b[1] < a[1]) {
      return -1;
    }
    if(a[1] === b[1]) {
      if(a[0] > b[0]) {
        return 1
      }
      if(b[0] < a[b]) {
        return -1
      }
    }
    return 0
  })
  let arr = []
  for(var i = 0; i < sortedByFreq.length; i++) {
    if(arr.length !== k) {
      arr.push(sortedByFreq[i][0])
    }
  }
  return arr

};

console.log(topKFrequent(["i",
"love",
"leetcode",
"i",
"love",
"coding"], 2))

let test1 = ["indbvb","oic","sviavwoxss","bwowfvira","ledleb","rxgw","jlmetsplg","bxlr","dmhuq","hnnftqf","wnfbo","cub","ckqqibnx","ous","abxvhyehv","rmrypv","zgsedk","hfhlfqzkcn","amarxpg","zddeno","zfkgsudxq","alkq","bgfvfa","ehd","ptk","hdmvplne","ypzfk","ouy","bxjxpfp","rlmdt","fwxulnpit","ijww","jdbgvc","jlgfgwb","ppn","nmclxk","mgqj","gucayxp","jxkvrmajri","bklij","oldainprua"]
let test2 = ["indbvb","oic","sviavwoxss","bwowfvira","jlmetsplg","ledleb","rxgw","bxlr","dmhuq","hnnftqf","wnfbo","ckqqibnx","cub","ous","abxvhyehv","rmrypv","zgsedk","amarxpg","hfhlfqzkcn","zddeno","zfkgsudxq","alkq","bgfvfa","ehd","ptk","bxjxpfp","hdmvplne","ouy","rlmdt","ypzfk","fwxulnpit","ijww","jdbgvc","jlgfgwb","ppn","bklij","gucayxp","jxkvrmajri","mgqj","nmclxk","oldainprua"]

let i = 0
let diff = []

while(test1.length >= i && test2.length >= i) {
  if(test1[i] != test2[i]) {
    diff.push("first array is different at ", i, " with word ", test1[i])
  }
  console.log(test1[i] === test2[i])
  i++
}

console.log(diff)
