var strStr = function(needle, haystack) {
 //use two pointers 
 const n = needle.length
 const h = haystack.length 
 var j = 0;

 		for(var i = 0; i < n; i++) {
 			while(needle[i] != haystack[j]) {
 				j++
 				if(j == h) {
 					return false 
 				}
 			}
 		}
 		return true
};

strStr("blue", "whale blue")
