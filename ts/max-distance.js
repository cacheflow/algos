var maxDistance = function(arrays) {
   var min = -1; 
   var counter = 0;
   var min  = arrays[0][0]
   var max = -1 
   var currentSum;
   for(var i = 0; i < arrays.length; i++) {
   	for(var j = 0; j < arrays[i].length; j++) {
   		currentSum = Math.abs(min - arrays[i][j])
			if(currentSum > max) {
				max = currentSum
			}
   	}
   }
   return max
};


maxDistance([ [1,2,3], [4,5], [1,2,3] ])