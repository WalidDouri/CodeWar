/*
Build a function that returns an array of integers from n to 1 where n>0.

Example : n=5 --> [5,4,3,2,1]
*/


//Answers
const reverseSeq = n => {
  let apples = []
  for (let i = 1; i <= n; i++) {
    apples.push(i)
  }
  return apples.reverse()
};


const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("reverseSeq", function () {
  it("Sample Test", function () {
    assert.deepEqual(reverseSeq(5), [5, 4, 3, 2, 1]);
  });
});