var lengthOfLongestSubstring = function(s) {
   let obj = {}	
   for(var i = 0; i < s.length; i++) {
   	if(obj.hasOwnProperty(s.charAt(i))) {
   		obj[s.charAt(i)]++
   	}
   	else {
   		obj[s.charAt(i)] = 1	
   	}
   }
   console.log(obj)
};


lengthOfLongestSubstring("abcabcbb")