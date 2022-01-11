const { expect } = require("@jest/globals");
const calculate = require("./calculate");

test(`Input: 
Coin: [10, 5, 2, 3, 6, 7]
Total Transaction: 23
Cost : 0.5

Output: 
{required: [10,7,6,5],
cost: 2,
change: 3}`, () => {
  expect(calculate([10, 5, 2, 3, 6, 7], 23, 0.5)).toMatchObject({
    required: [10, 7, 6, 5],
    cost: 2,
    change: 3,
  });
});

test(`Input:
Coin: [10, 10, 2, 3, 6, 7]
Total Transaction: 20
cost: 0.5

Output:
{required: [10,10,7],
cost: 1.5,
change: 5.5}`, () => {
  expect(calculate([10, 10, 2, 3, 6, 7], 20, 0.5)).toMatchObject({
    required: [10, 10, 7],
    cost: 1.5,
    change: 5.5,
  });
});

test(`Input:
Coin: [10, 3, 5, 15]
Total Transaction: 20
cost: 1

Output:
{required: [15,10],
cost: 2,
change: 3}`, () => {
  expect(calculate([10, 3, 5, 15], 20, 1)).toMatchObject({
    required: [15, 10],
    cost: 2,
    change: 3,
  });
});

test(`Less coins
Input: 
Coin: [10, 5, 7]
Total Transaction: 22
Cost : 0.5

Output: false`, () => {
  expect(calculate([10, 5, 7], 22, 0.5)).toBe(false);
});
