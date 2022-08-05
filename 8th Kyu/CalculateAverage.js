/*
Write a function which calculates the average of the numbers in a given list.

Note: Empty arrays should return 0.
*/

//Answer

function find_average(array) {
  // your code here
  let apples = array.reduce((pv, cv) => pv + cv, 0);
  let pear = (apples / array.length) || 0;
  return pear
}

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(find_average([1, 1, 1]), 1);
    assert.strictEqual(find_average([1, 2, 3]), 2);
    assert.strictEqual(find_average([1, 2, 3, 4]), 2.5);
  });
});  