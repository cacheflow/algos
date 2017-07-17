/**
 * @param {number[][]} nums
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function(nums, r, c) {
	var arr = []
	var counter = 0;
	for(var i = 0; i < r; i++) {
		arr[counter++] = []
	}
	if(nums.length == 0 || r * c != nums.length * nums[0].length) {
		return nums
	}
	var rows = 0;
	var columns = 0;
	for(var i = 0; i < nums.length; i++) {
		for(var j = 0; j < nums[0].length; j++) {
			arr[rows][columns] = nums[i][j]
			columns++
			if(columns == c) {
				rows++
				columns = 0
			}
		}
	}
	return arr
};


console.log(matrixReshape([[1,2],[3,4]]
, 4, 1))
