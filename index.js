const readline = require("readline-sync");
const sampleCoin = [10, 5, 2, 3, 6, 7];
const sampletotalTransaction = 23;
const calculate = require("./calculate");

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

const result = calculate(coin, totalTransaction);

console.log(`
  ======================================
    Coin Yang Diperlukan: [${result.required}]
    Biaya: ${result.cost}

    Kembalian: ${result.change}
  ======================================
    `);
