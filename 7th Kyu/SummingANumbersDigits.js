/*
Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.

For example: (Input --> Output)

10 --> 1
99 --> 18
-32 --> 5
Let's assume that all numbers in the input will be integer values.
*/

//Answers 

function sumDigits(number) {


  let sum = 0
  let apples = number.toString().split('')
  if (number < 0) {
    let cheese = number * -1
    let apples = cheese.toString().split('')
    console.log(apples)
    for (let i = 0; i < apples.length; i++) {
      sum += apples[i] * 1
    }
    return sum
  }

  for (let i = 0; i < apples.length; i++) {
    sum += apples[i] * 1
  }
  return sum
}


//Best Answer
function sumDigits(number) {
  return Math.abs(number).toString().split('').reduce(function (a, b) { return +a + +b }, 0);
}




const { assert } = require("chai")

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(sumDigits(10), 1);
    assert.strictEqual(sumDigits(99), 18);
    assert.strictEqual(sumDigits(-32), 5);
  })
})
