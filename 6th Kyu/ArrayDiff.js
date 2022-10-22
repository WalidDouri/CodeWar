/*
Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

It should remove all values from list a, which are present in list b keeping their order.

arrayDiff([1,2],[1]) == [2]
If a value is present in b, all of its occurrences must be removed from the other:

arrayDiff([1,2,2,2,3],[2]) == [1,3]
T
*/

//Answer

function arrayDiff(a, b) {
  let apples = a.filter(e => !b.includes(e))
  return apples
}

//different between both arrays
//filter maybe? nested for loops? to compare the values at said index

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Basic tests", () => {
  it("Should pass Basic tests", () => {
    assert.deepEqual(arrayDiff([1, 2], [1]), [2], "a was [1,2], b was [1]");
    assert.deepEqual(arrayDiff([1, 2, 2], [1]), [2, 2], "a was [1,2,2], b was [1]");
    assert.deepEqual(arrayDiff([1, 2, 2], [2]), [1], "a was [1,2,2], b was [2]");
    assert.deepEqual(arrayDiff([1, 2, 2], []), [1, 2, 2], "a was [1,2,2], b was []");
    assert.deepEqual(arrayDiff([], [1, 2]), [], "a was [], b was [1,2]");
    assert.deepEqual(arrayDiff([1, 2, 3], [1, 2]), [3], "a was [1,2,3], b was [1,2]")
  });
});
