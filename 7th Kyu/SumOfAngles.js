/*
Find the total sum of internal angles (in degrees) in an n-sided simple polygon. N will be greater than 2.
*/

//Answer

function angle(n) {
  //code here
  return ((n - 2) * 180)

}

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(angle(3), 180);
    assert.strictEqual(angle(4), 360);
  });
})
