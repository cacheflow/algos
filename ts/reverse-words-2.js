var reverseWords = function(str) {
	str = str.split('')
	swap(str, 0, str.length - 1)
	let begin = 0; 
	for(var i = 0; i < str.length; i++) {
		if(str[i] == ' ') {
			str = swap(str, begin, i - 1)
			begin = i + 1
		}
	}
	swap(str, begin, str.length - 1)
	return str.join('')
}

function swap(arr, begin, end) {
	while(begin < end) {
		let temp = arr[begin]
		arr[begin] = arr[end]
		arr[end] = temp 
		begin++
		end--
	}
	return arr
}

reverseWords("the sky is blue")

