/*
Given a sequence of numbers, find the largest pair sum in the sequence.

For example

[10, 14, 2, 23, 19] -->  42 (= 23 + 19)
[99, 2, 2, 23, 19]  --> 122 (= 99 + 23)
Input sequence contains minimum two elements and every element is an intege
*/

//answer

function largestPairSum(numbers) {
  //TODO: Write your Code here

  let apples = numbers.sort((a, b) => a - b)

  let sum = apples[numbers.length - 1] + apples[numbers.length - 2]

  console.log(apples)
  console.log(sum)
  return sum
}

const strictEqual = require("chai").assert.strictEqual;

function doTest(array, expected) {
  const actual = largestPairSum(array);
  strictEqual(actual, expected, `for array [${array.join(', ')}]:\n`);
}

it("Basic tests", () => {
  doTest([10, 14, 2, 23, 19], 42);
  doTest([-100, -29, -24, -19, 19], 0);
  doTest([1, 2, 3, 4, 6, -1, 2], 10);
  doTest([-10, -8, -16, -18, -19], -18);
});