/**
 * Initialize your data structure here.
 */
var WordDictionary = function() {

};

let map = {}

WordDictionary.prototype.addWord = function(word) {
  map[word] = word
};


WordDictionary.prototype.search = function(word) {
  let reg = new RegExp(word, 'g')
  return Object.keys(map).some(w => reg.test(w))
};



 var obj = new WordDictionary
 obj.addWord('wow')
 obj.addWord('hello')

 console.log(Object.keys(map))
