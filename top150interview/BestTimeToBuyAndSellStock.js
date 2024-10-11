var maxProfit = function(prices) {
  let max = 0;
  let maxdiff = 0;
  for(let i=prices.length-1; i>=0; i--) {
    if(max<prices[i]) {
      max = prices[i]
    }
    else {
      maxdiff = maxdiff<(max-prices[i]) ? max-prices[i] : maxdiff
    }
  }
  return maxdiff  
};

// node ./interview/BestTimeToBuyAndSellStock.js