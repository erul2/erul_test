const sampleCoin = [10, 5, 2, 3, 6, 7];
const sampleTransaction = 23;
const sampleCost = 0.5;

const calculate = (cost, coin, transaction) => {
  let required = [];
  let total = 0;
  let totalCost = 0;
  let change = 0;

  coin = coin.sort((a, b) => b - a);

  coin.forEach((e) => {
    if (required.length == 0 || total <= transaction) {
      required.push(e);
      total += e;
      totalCost += cost;
    }
  });

  change = total - transaction - totalCost;

  console.log(`
  ======================================
    Coin Yang Dimiliki: [${coin}]
    Total Transaksi: ${transaction}

    Coin Yang Diperlukan: [${required}]
    Biaya: ${totalCost}

    Kembalian: ${change}
  ======================================


    `);
};

const readline = require("readline-sync");

let coin = readline.question(
  `Input Coin (dipisah dengan koma): 
default ${sampleCoin} \n`,
  {
    defaultInput: sampleCoin,
  }
);
coin = coin.split(",").map((item) => parseInt(item));

let transaction = readline.question(
  `Total Transaksi: 
default ${sampleTransaction} \n`,
  {
    defaultInput: sampleTransaction,
  }
);
transaction = parseFloat(transaction);

let cost = readline.question(
  `Biaya (per koin): 
default ${sampleCost} \n`,
  {
    defaultInput: sampleCost,
  }
);
cost = parseFloat(cost);

calculate(cost, coin, transaction);
