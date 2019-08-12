var findRestaurant = function(list1, list2) {
  var arr = []
  var min = Infinity
  var minSum;
 	var res; 
 	var obj = {}
 	for(var i = 0; i < list1.length; i++) {
 		obj[list1[i]] = i
 	}
 	var minSum = Infinity;
 	var sum;
 	for(var i = 0; i < list1.length; i++) {
 		if(obj.hasOwnProperty(list2[i])) {
 			sum = i + obj[list2[i]] 
 			if(sum < minSum) {
 				arr.length = 0; 
 				arr.push(list2[i])
 				minSum = sum
 			}
 			else if(minSum == sum) {
 				arr.push(list2[i])
 			}
 		}
 	}
 	return arr
};

findRestaurant(["Shogun","Tapioca Express","Burger King","KFC"], ["KFC","Burger King", "Tapioca Express","Shogun"])
