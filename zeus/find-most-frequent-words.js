var topKFrequent = function(words, k) {
     if(words === null || words.length === 0) {
       return;
     }

      var hashMap = {}

      for(let i = 0; i < words.length; i++) {
          if(words[i] in hashMap) {
            let val = hashMap[words[i]]
            hashMap[words[i]] +=1
          }
          else {
            hashMap[words[i]] = 1
          }

      }
      let arr = []
      let sortedArrByFreq = Object.keys(hashMap).map((k) => {
        return [hashMap[k], k]
      })
      // a negative number if "a"
      // should be before "b" and a positive number if "b" should be before "a".
      sortedArrByFreq.sort((a, b) => {
        if(b[0] > a[0]) {
          return 1
        }
        if(a[0] > b[0]) {
          return -1
        }
        if(a[0] === b[0]) {
          if(b[1] > a[1]) {
            return -1
          }
          if(b[1] < a[1]) {
            return 1
          }
        }
      })
      let result = sortedArrByFreq.slice(0, k)
      return result.map((ele) => {
          return ele[1];
      })
};
var arr = ["plpaboutit","jnoqzdute","sfvkdqf","mjc","nkpllqzjzp","foqqenbey","ssnanizsav","nkpllqzjzp","sfvkdqf","isnjmy","pnqsz","hhqpvvt","fvvdtpnzx","jkqonvenhx","cyxwlef","hhqpvvt","fvvdtpnzx","plpaboutit","sfvkdqf","mjc","fvvdtpnzx","bwumsj","foqqenbey","isnjmy","nkpllqzjzp","hhqpvvt","foqqenbey","fvvdtpnzx","bwumsj","hhqpvvt","fvvdtpnzx","jkqonvenhx","jnoqzdute","foqqenbey","jnoqzdute","foqqenbey","hhqpvvt","ssnanizsav","mjc","foqqenbey","bwumsj","ssnanizsav","fvvdtpnzx","nkpllqzjzp","jkqonvenhx","hhqpvvt","mjc","isnjmy","bwumsj","pnqsz","hhqpvvt","nkpllqzjzp","jnoqzdute","pnqsz","nkpllqzjzp","jnoqzdute","foqqenbey","nkpllqzjzp","hhqpvvt","fvvdtpnzx","plpaboutit","jnoqzdute","sfvkdqf","fvvdtpnzx","jkqonvenhx","jnoqzdute","nkpllqzjzp","jnoqzdute","fvvdtpnzx","jkqonvenhx","hhqpvvt","isnjmy","jkqonvenhx","ssnanizsav","jnoqzdute","jkqonvenhx","fvvdtpnzx","hhqpvvt","bwumsj","nkpllqzjzp","bwumsj","jkqonvenhx","jnoqzdute","pnqsz","foqqenbey","sfvkdqf","sfvkdqf"]


console.log(topKFrequent(arr, 1))
