/*
When provided with a number between 0-9, return it in words.

Input :: 1

Output :: "One".

If your language supports it, try using a switch statement.


*/

//Answer

function switchItUp(number) {
  //Write your own Code!
  if (number === 0)
    return 'Zero';
  if (number === 1)
    return 'One';
  if (number === 2)
    return 'Two';
  if (number === 3)
    return 'Three';
  if (number === 4)
    return 'Four';
  if (number === 5)
    return 'Five';
  if (number === 6)
    return 'Six';
  if (number === 7)
    return 'Seven';
  if (number === 8)
    return 'Eight';
  if (number === 9)
    return 'Nine';

}


const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Basic Tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(switchItUp(1), "One");
    assert.strictEqual(switchItUp(3), "Three");
    assert.strictEqual(switchItUp(5), "Five");
  });
});
