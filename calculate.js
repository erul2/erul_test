const calculate = (coin, totalTransaction, cost) => {
  let requiredCoin = [];
  let totalCoin = 0;
  let totalCost = 0;
  let change = 0;

  coin = coin.sort((a, b) => b - a);

  if (
    coin.reduce((a, b) => a + b) - coin.length * cost - totalTransaction <
    0
  ) {
    return "Not enough coins";
  }

  coin.forEach((e) => {
    change = totalCoin - totalTransaction - totalCost;
    if (
      requiredCoin.length == 0 ||
      totalCoin <= totalTransaction ||
      change < 0
    ) {
      requiredCoin.push(e);
      totalCoin += e;
      totalCost += cost;
    }
  });

  if (change < 0);

  return {
    required: requiredCoin,
    cost: totalCost,
    change: change,
  };
};

module.exports = calculate;
