/*
The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

What if the string is empty? Then the result should be empty object literal, {}.


*/


//Answer
function count(string) {
  // The function code should be here
  let count = {};
  string.split("").forEach(letter => {
    count[letter] = count[letter] ? (count[letter] + 1) : 1;
  }
  )
  return count
}






const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Tests", () => {
  it("should pass sample tests", () => {
    assert.deepEqual(count("aba"), { a: 2, b: 1 });
    assert.deepEqual(count(""), {});
  });
});
