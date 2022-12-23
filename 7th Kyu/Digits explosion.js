/*
Given a string made of digits [0-9], return a string where each digit is repeated a number of times equals to its value.

Examples
explode("312")
should return :

"333122"
explode("102269")
should return :

"12222666666999999999"
*/

//Answer

function explode(s) {

  let apples = s.split('');
  let cheese = '';

  for (let i = 0; i < s.length; i++) {
    cheese += apples[i].repeat(apples[i] * 1)
  }

  return cheese;
}


const assert = require('chai').assert;
describe("Example tests", () => {
  const tests = [
    ["312", "333122"],
    ["102269", "12222666666999999999"],
    ["0", ""],
    ["000", ""],
    ["123", "122333"]
  ];
  for (const [input, expected] of tests)
    it(JSON.stringify(input), () => assert.strictEqual(explode(input), expected));
});