var reverseString = function(s) {
		var sLength = s.length
		var newStr = ""
		var arr = []
		s = s.split(' ')
    for(var i = 0; i < s.length; i++) {
    	for(var j = s[i].length - 1; j >= 0; j--) {
	    	newStr += s[i][j]
	    	if(s[i].length == newStr.length) {
	    		arr.push(newStr + '')
	    		newStr = ""
	    	}
    	}

    }
    // return arr.join(' ')
};

console.log(reverseString("Let's take LeetCode contest"))