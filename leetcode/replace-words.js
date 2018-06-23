var replaceWords = function(dict, sentence) {
  let obj = {}
  let i = 0;
  let j = 0;
  sentence = sentence.split(' ')
  while(i < dict.length && j < sentence.length) {
    if(sentence[j].startsWith(dict[i])) {
      sentence[j] = dict[i]
      j++
    }
    if(j === sentence.length && i != dict.length) {
      console.log('hi')
      j = 0;
    }
    console.log(sentence[j])
    j++
  }
  console.log(sentence)
};

const dict = ["cat", "bat", "rat"]
const sentence = "the cattle was rattled by the battery"
replaceWords(dict, sentence)
