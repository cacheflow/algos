const makeChange = (amount) => {
  let sum = 0;
  let change = [25, 10, 5, 1];
  amount = amount * 100
  let denominations = {
    25: 'quarters',
    10: 'dimes',
    5: 'nickels',
    1: 'pennies'
  }
  let totalNumOfEachCoin = {
    quarters: 0,
    dimes: 0,
    nickels: 0,
    pennies: 0
  }
  for(var i = 0; i < change.length; i++) {
    let reducedChange = Math.floor(amount / change[i])
    if(reducedChange >= 1) {
      let getDenom = denominations[change[i]]
      totalNumOfEachCoin[getDenom] = reducedChange
      amount -= reducedChange * change[i]
    }
  }
  return totalNumOfEachCoin
}

makeChange(1.55)
