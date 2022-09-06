/*
Write a small function that returns the values of an array that are not odd.

All values in the array will be integers. Return the good values in the order they are given.

ARRAYSFUNDAMENTALS
*/


//answer

function noOdds(values) {
  // Return all non-odd values
  let apples = []
  for (let i = 0; i < values.length; i++) {
    if (values[i] % 2 == 0) {
      apples.push(values[i])
    }
  }
  return apples
}



const { assert } = require("chai")

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.deepEqual(noOdds([0, 1]), [0])
    assert.deepEqual(noOdds([0, 1, 2, 3]), [0, 2])
  })
})

describe("Random tests", () => {

  function randint(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  for (let i = 0; i < 100; i++) {
    let arr = Array.from({ length: randint(0, 200) }, (_, i) => randint(-200, 200))
    let expected = arr.filter(x => x % 2 == 0)
    it(`noOdds(${JSON.stringify(arr)}) should equal ${JSON.stringify(expected)}`, () => {
      assert.deepEqual(noOdds(arr), expected);
    });
  }
})