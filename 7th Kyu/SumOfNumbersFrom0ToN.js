/*
Description:

We want to generate a function that computes the series starting from 0 and ending until the given number.

Example:
Input:

> 6
Output:

0+1+2+3+4+5+6 = 21

Input:

> -15
Output:

-15<0

Input:

> 0
Output:

0=0
*/

//Answer

var SequenceSum = (function () {
  function SequenceSum() { }

  SequenceSum.showSequence = function (count) {
    let apples = []
    for (let i = 0; i <= count; i++) {
      apples.push(i)
    }
    //       console.log(pear)
    console.log(apples)
    let pear = apples.reduce((a, b) => a + b, 0)
    let cheese = apples.join('+')
    if (count < 0) return `${count}<0`;
    if (count == 0) return `${count}=0`;
    return `${cheese} = ${pear}`
  };

  return SequenceSum;

})();


const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Tests", () => {
  it("test", () => {
    assert.strictEqual(SequenceSum.showSequence(6), "0+1+2+3+4+5+6 = 21")
  });
});
