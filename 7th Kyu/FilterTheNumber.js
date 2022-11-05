/*
Filter the number
Oh, no! The number has been mixed up with the text. Your goal is to retrieve the number from the text, can you return the number back to its original state?

Task
Your task is to return a number from a string.

Details
You will be given a string of numbers and letters mixed up, you have to return all the numbers in that string in the order they occur.


*/

//Answer
var filterString = function (value) {
  //Complete this function :)

  let apples = value.replace(/[^\d]/g, '')

  return apples * 1

}

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Sample Tests", function () {
  it("should pass some sample tests", function () {
    assert.strictEqual(filterString("123"), 123, 'Just return the numbers');
    assert.strictEqual(filterString("a1b2c3"), 123, 'Just return the numbers');
    assert.strictEqual(filterString("aa1bb2cc3dd"), 123, 'Just return the numbers');
  });
});