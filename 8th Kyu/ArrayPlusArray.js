/*
I'm new to coding and now I want to get the sum of two arrays... Actually the sum of all their elements. I'll appreciate for your help.

P.S. Each array includes only integer numbers. Output is a number too.
*/


//Answer

function arrayPlusArray(arr1, arr2) {
  let apples = arr1.reduce((a, b) => a + b, 0)
  let pear = arr2.reduce((a, b) => a + b, 0)

  return apples + pear
}


const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(arrayPlusArray([1, 2, 3], [4, 5, 6]), 21);
    assert.strictEqual(arrayPlusArray([-1, -2, -3], [-4, -5, -6]), -21);
    assert.strictEqual(arrayPlusArray([0, 0, 0], [4, 5, 6]), 15);
    assert.strictEqual(arrayPlusArray([100, 200, 300], [400, 500, 600]), 2100);
  })
})

A
