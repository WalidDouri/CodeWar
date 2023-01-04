/*
Given a string made up of letters a, b, and/or c, switch the position of letters a and b (change a to b and vice versa). Leave any incidence of c untouched.

Example:

'acb' --> 'bca'
'aabacbaa' --> 'bbabcabb'


*/

//Answer
function switcheroo(x) {

  let apples = x.replace(/[ab]/g, x => x == "a" ? "b" : "a")

  return apples

}

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Switcheroo", () => {
  it("Fixed tests", () => {
    assert.strictEqual(switcheroo('abc'), 'bac');
    assert.strictEqual(switcheroo('aaabcccbaaa'), 'bbbacccabbb');
    assert.strictEqual(switcheroo('ccccc'), 'ccccc');
  })
});