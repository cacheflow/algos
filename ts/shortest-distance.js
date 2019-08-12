var words = ["practice", "makes", "perfect", "coding", "makes"]
var long = ["this","is","a","long","sentence","is","fun","day","today","sunny","weather","is","a","day","tuesday","this","sentence","run","running","rainy"]

var shortestDistance = function(words, word1, word2) {
  var word1Index = -1;
  var word2Index = -1;
  var minDistance = -1;
  var distance = -1;

  for(var i = 0; i < words.length; i++) {
    if(words[i] == word1) {
      word1Index = i
    }
    if(words[i] == word2) {
      word2Index = i
    }
    var bothWordsAreFound = word1Index != -1 && word2Index != -1 
    if(bothWordsAreFound) {
      distance = Math.abs(word1Index - word2Index)
      if(minDistance == -1 || minDistance > distance) {
        minDistance = distance
      }
    }
  }
  return minDistance
}

shortestDistance(["a","a","b","b"], "a", "b")
