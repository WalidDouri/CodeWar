/*
Write a function named setAlarm which receives two parameters. The first parameter, employed, is true whenever you are employed and the second parameter, vacation is true whenever you are on vacation.

The function should return true if you are employed and not on vacation (because these are the circumstances under which you need to set an alarm). It should return false otherwise. Examples:

setAlarm(true, true) -> false
setAlarm(false, true) -> false
setAlarm(false, false) -> false
setAlarm(true, false) -> true
*/

//Answers are
function setAlarm(employed, vacation) {

  if (employed === true && vacation == true) {
    return false
  } if (employed === false && vacation == true) {
    return false
  } if (employed === true && vacation == false) {
    return true
  } else {
    return false
  }
}

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Test Suite", () => {
  it("Fixed tests", () => {
    assert.strictEqual(setAlarm(true, true), false, "Should be false.");
    assert.strictEqual(setAlarm(false, true), false, "Should be false.");
    assert.strictEqual(setAlarm(true, false), true, "Should be true.");
  });
});
