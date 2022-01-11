const calculate = require("./calculate");

const readline = require("readline-sync");
const sampleCoin = [10, 5, 2, 3, 6, 7];
const sampletotalTransaction = 23;
const sampleCost = 0.5;

let coin = readline.question(
  `Input Coin (dipisah dengan koma):
default ${sampleCoin} \n`,
  {
    defaultInput: sampleCoin,
  }
);
coin = coin.split(",").map((item) => parseInt(item));

let totalTransaction = readline.question(
  `Total Transaksi:
default ${sampletotalTransaction} \n`,
  {
    defaultInput: sampletotalTransaction,
  }
);
totalTransaction = parseFloat(totalTransaction);

let cost = readline.question(
  `Biaya (per koin):
default ${sampleCost} \n`,
  {
    defaultInput: sampleCost,
  }
);
cost = parseFloat(cost);

const result = calculate(coin, totalTransaction, cost);

console.log(`
  ======================================
    Coin Yang Diperlukan: [${result.required}]
    Biaya: ${result.cost}

    Kembalian: ${result.change}
  ======================================
    `);
