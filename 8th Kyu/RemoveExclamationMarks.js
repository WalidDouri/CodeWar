/*
Write function RemoveExclamationMarks which removes all exclamation marks from a given string.
*/

//Answer
function removeExclamationMarks(s) {
  let apples = s.replace(/\!/g, '')
  console.log(apples)
  return apples;
}

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Tests", () => {
  it("test", () => {
    assert.strictEqual(removeExclamationMarks("Hello World!"), "Hello World");
  });
});