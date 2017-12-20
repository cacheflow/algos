    var currMax = nums[0]
	var globalMax = nums[0]
    var unsortedArray = nums.slice()
	var sortedArray = nums.sort( (a, b) => a - b)
    
    console.log(sortedArray[sortedArray.length - 1])
    if (sortedArray[sortedArray.length - 1] < 0) {
        console.log("ENTER HERE")
        return sortedArray[sortedArray.length - 1]
    } else {
        for(var i = 0; i < unsortedArray.length; ++i) {
			currMax = Math.max(0, currMax + unsortedArray[i])
            globalMax = Math.max(globalMax, currMax) 	
	    }
        return globalMax
    }
	
	