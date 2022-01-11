const calculate = (coin, totalTransaction) => {
  const cost = 0.5;
  let requiredCoin = [];
  let totalCoin = 0;
  let totalCost = 0;
  let change = 0;

  coin = coin.sort((a, b) => b - a);

  coin.forEach((e) => {
    if (requiredCoin.length == 0 || totalCoin <= totalTransaction) {
      requiredCoin.push(e);
      totalCoin += e;
      totalCost += cost;
    }
  });

  change = totalCoin - totalTransaction - totalCost;

  return {
    required: requiredCoin,
    cost: totalCost,
    change: change,
  };
};

module.exports = calculate;
