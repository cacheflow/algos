var maxProfit = function(prices) {
 let max = 0
 let min = prices[0]
 if(prices.length == 0) {
 	return 0 
 }

 for(var i = 1; i < prices.length; i++) {
 		min = Math.min(min, prices[i])
 		max = Math.max(max, prices[i] - min)
 }
 return max
}

//every time we are calculating the smallest number and largest max number 

var prices = [7, 1, 5, 3, 6, 4]

console.log(maxProfit(prices))
