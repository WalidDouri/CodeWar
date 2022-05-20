/*
We need a function that can transform a number into a string.

What ways of achieving this do you know ?

  Examples :
  123 -- > "123"
999 -- > "999"

*/


//Answer
function numberToString(num) {
  let baaa = num.toString();
  return baaa;
}


const assert = require('chai').assert;
describe("Tests", () => {
  it("test", () => {
    assert.strictEqual(numberToString(67), '67');
  });
});
