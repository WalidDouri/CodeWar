/*
Triangular numbers are so called because of the equilateral triangular shape that they occupy when laid out as dots. i.e.

1st (1)   2nd (3)    3rd (6)
*          **        ***
           *         **
                     *
You need to return the nth triangular number. You should return 0 for out of range values:

For example: (Input --> Output)

0 --> 0
2 --> 3
3 --> 6
-10 --> 0
*/

//Answer

function triangular(n) {
  if (n > 0) {
    return n * (n + 1) / 2
  } else {
    return 0
  }
}


// Return the nth triangular number
function triangular(n) {
  let sum = 0
  let i = 0
  while (i <= n) {
    sum += i
    i++
  }
  return sum
}





const { assert } = require("chai")

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(triangular(2), 3)
    assert.strictEqual(triangular(4), 10)
  })
})
