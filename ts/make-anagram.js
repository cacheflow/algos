var makeAnagram = function(s) {
	if(s.length % 2 == 1) {
       return -1
    }
    var obj = {}
    var count = 0
    for(var i = 0; i < s.length / 2; i++) {
     if(obj.hasOwnProperty(s.charAt(i))) {
        obj[s.charAt(i)]++
      }
      else {
        obj[s.charAt(i)] = 1
      }
    }
    for(var j = i; i < s.length; i++) {
       if(obj.hasOwnProperty(s.charAt(i))) {
           obj[s.charAt(i)]--
        }
    }
    for(var key in obj) {	
    		if(obj[key] > -1) {
    			count += obj[key]
    		}
    }
    return count
}

makeAnagram("ab")
makeAnagram("abc")
makeAnagram("mnop")
makeAnagram("xyyx")
makeAnagram("xaxbbbxx")