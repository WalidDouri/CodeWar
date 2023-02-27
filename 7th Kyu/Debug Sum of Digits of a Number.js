/*
Debug   function getSumOfDigits that takes positive integer to calculate sum of its digits. Assume that argument is an integer.

Example
123  => 6
223  => 7
1337 => 14
*/

//Answer
function getSumOfDigits(integer) {
  var sum = null;
  var digits = integer.toString().split('').reduce(
    (x, y) => x * 1 + y * 1, 0);

  return digits;
}

const { assert } = require('chai');

describe("Tests", () => {
  it("Fixed tests", () => {
    assert.strictEqual(getSumOfDigits(123), 6, 'Incorrect answer for integer=123');
    assert.strictEqual(getSumOfDigits(223), 7, 'Incorrect answer for integer=223');
    assert.strictEqual(getSumOfDigits(0), 0, 'Incorrect answer for integer=0');
  });
});
