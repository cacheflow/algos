function getMaxProfit(stockPricesYesterday) {
  if(stockPricesYesterday.length < 2) {
    throw new Error('Getting a profit requires at least 2 prices')
  }

  let minPrice = stockPricesYesterday[0]
  let maxProfit = stockPricesYesterday[1] - stockPricesYesterday[0]

  for(let i = 0; i < stockPricesYesterday.length; i++) {
    const currentPrice = stockPricesYesterday[i];

    minPrice = Math.min(minPrice, currentPrice);

    const potentialProfit = currentPrice - minPrice;

    maxProfit = Math.max(maxProfit, potentialProfit);
  }
  return maxProfit;
}
