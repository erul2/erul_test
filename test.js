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
    Coin Yang Dimiliki: [${coin}]
    Total Transaksi: ${transaction}

    Coin Yang Diperlukan: [${required}]
    Biaya: ${totalCost}

    Kembalian: ${change}

    `);
};

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const question = (theQuestion, sample) => {
  return new Promise((resolve) => {
    rl.question(theQuestion, (answer) => resolve(answer || sample));
    rl.write(sample);
  });
};

async function getInput() {
  let coin = await question(
    "Input Coin (dipisah dengan koma): ",
    sampleCoin.toString()
  );

  coin = coin.split(",").map((item) => parseInt(item));

  let transaction = await question(
    "Total Transaksi: ",
    sampleTransaction.toString()
  );
  transaction = parseInt(transaction);

  let cost = await question(
    "Biaya Transaksi per coin: ",
    sampleCost.toString()
  );
  cost = parseFloat(cost);

  calculate(cost, coin, transaction);

  await question("Press Enter to exit...");
  process.exit();
}

getInput();
