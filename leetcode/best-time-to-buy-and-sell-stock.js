var maxProfit = function(prices) {
  var maxProfit = 0;
  for(var i = 0; i < prices.length; i++) {
    for(var j = i + 1; j < prices.length; j++) {
      profit = prices[i] - prices[j]
      if(profit > maxProfit) {
        maxProfit = profit
      }
    }
  }
  return maxProfit
}

var prices = [7, 1, 5, 3, 6, 4]

maxProfit(prices)
