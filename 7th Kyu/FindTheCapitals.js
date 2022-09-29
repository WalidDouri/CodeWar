/*
Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

Example
Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] );
*/


//Answer

var capitals = function (word) {
  // Write your code here
  let apples = word.split('');
  let newArr = []

  for (let i = 0; i < apples.length; i++) {
    if (apples[i].toUpperCase() == apples[i])
      newArr.push(i)
  }
  return newArr
};



const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.deepEqual(capitals('CodEWaRs'), [0, 3, 4, 6]);
  });
});