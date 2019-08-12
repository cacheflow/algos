var areSentencesSimilar = function(words1, words2, pairs) {
 if(words1.length != words2.length) {
    return false
 }
 let s = {}
 for(let i = 0; i < pairs.length; i++) {
   if(Array.isArray(pairs[i])) {
     let arr = pairs[i]
     for(var j = 0; j < arr.length && arr[j + 1] != undefined; j++) {
       if( !(arr[j] in s) ) {
         s[arr[j]] = arr[j + 1]
       }
     }
   }
 }
 let x = 0
 while(x < words1.length && x < words2.length) {
   if( s[words1])
   x++
 }
};

areSentencesSimilar("great acting skills".split(' '), "fine drama talent".split(' '), [["great", "fine"], ["acting","drama"], ["skills","talent"]])
