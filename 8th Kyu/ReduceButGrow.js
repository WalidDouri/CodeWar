/*
Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

[1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

*/

// Answer

function grow(x) {

  let sum = 1;
  for (let i = 0; i < x.length; i++) {
    sum = sum * x[i];
  }
  return sum;
}

// Answer
//Best Practices

const grow = x => x.reduce((a, b) => a * b)



//Sample Test
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(grow([1, 2, 3]), 6);
    assert.strictEqual(grow([4, 1, 1, 1, 4]), 16);
    assert.strictEqual(grow([2, 2, 2, 2, 2, 2]), 64);
  });
})