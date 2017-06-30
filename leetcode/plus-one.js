var plusOne = function(digits) {
	for(var i = digits.length - 1; i >= 0; --i) {
		if(digits[i] == 9) {
			digits[i] = 0
		}
		else {
			++digits[i]
			break;
		}
	}

	if(digits[0] == 0) {
		digits.unshift(1)
	}

	return digits
}

console.log(plusOne([9]))
