/*
Just a simple sorting usage. Create a function that returns the elements of the input-array / list sorted in lexicographical order.


*/

//Answer
// input: names - unsorted array
// output: sorted array
sortme = function (names) {


  let apples = names.sort()
  return apples

  console.log(apples)
}

const { assert } = require("chai")

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.deepEqual(sortme(['one', 'two', 'three']), ["one", "three", "two"])
  })
})