const { expect } = require("@jest/globals");
const calculate = require("./calculate");

test(`Input: 
Coin: [10, 5, 2, 3, 6, 7]
Total Transaction: 23 

Output: 
Required Coins: [10,7,6,5],
Cost: 2,
Change: 3`, () => {
  expect(calculate([10, 5, 2, 3, 6, 7], 23)).toMatchObject({
    required: [10, 7, 6, 5],
    cost: 2,
    change: 3,
  });
});

test(`Input:
Coin: [10, 5, 2, 3, 6, 7]
Total Transaction: 23

Output:
Required coins: [10,7,6,5],
cost: 1.5,
change: 3.5`, () => {
  expect(calculate([10, 5, 2, 3, 6, 7], 23)).toMatchObject({
    required: [10, 7, 6, 5],
    cost: 1.5,
    change: 3.5,
  });
});
