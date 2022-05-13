
/*
An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

Example: (Input --> Output)

"Dermatoglyphics" --> true
"aba" --> false
"moOse" --> false (ignore letter case)

*/

//Answer

function isIsogram(str) {
  //Empty string are isograms if statement
  // could use filter/charAt/match with regexp
  // separate the word into individual characters and match.
  // convert string to all lowercase
  let that = !str.match(/(.).*\1/i);
  return that

}




const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Tests", () => {
  it("test", () => {
    assert.strictEqual(isIsogram("Dermatoglyphics"), true);
    assert.strictEqual(isIsogram("isogram"), true);
    assert.strictEqual(isIsogram("aba"), false, "same chars may not be adjacent");
    assert.strictEqual(isIsogram("moOse"), false, "same chars may not be same case");
    assert.strictEqual(isIsogram("isIsogram"), false);
    assert.strictEqual(isIsogram(""), true, "an empty string is a valid isogram");
  });
});
