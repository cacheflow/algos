var majorityElement = function(nums) {
	if(nums.length > 1) {
		var obj = {}
		var minimum = -1
		var arr = []
		for(var i = 0; i < nums.length; i++) {
			if(obj.hasOwnProperty(nums[i])) {
				obj[nums[i]]++
			}
			else {
				obj[nums[i]] = 1
			}
		}
		for(var key in obj) {
			if(obj[key] > minimum) {
				arr.length = 0; 
				arr.push(key)
				minimum = obj[key]
			}
		}
		return parseInt(arr[0])
	}
	else {
		return nums[0]
	}
}

majorityElement([3,3,4])