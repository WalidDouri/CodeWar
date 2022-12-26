/*
Now you have to write a function that takes an argument and returns the square of it.
*/


//Answer

// Write the "square"-function here

function square(x) {
  return x * x
}

const { assert } = require('chai');

describe("Tests", () => {
  it("test", () => {
    assert.strictEqual(square(3), 9);
  });
});
