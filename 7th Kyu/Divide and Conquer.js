/*
Given a mixed array of number and string representations of integers, add up the non-string integers and subtract the total of the string integers.

Return as a number.
*/

//Answer
function divCon(x) {
  let sum = 0;

  for (let i = 0; i < x.length; i++) {
    if (typeof x[i] === 'number') {
      sum += x[i];
    } else {
      sum -= x[i];
    }
  }
  return sum;

}


const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Divide and Conquer", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(divCon([9, 3, '7', '3']), 2);
    assert.strictEqual(divCon(['5', '0', 9, 3, 2, 1, '9', 6, 7]), 14);
    assert.strictEqual(divCon(['3', 6, 6, 0, '5', 8, 5, '6', 2, '0']), 13);
  })
});