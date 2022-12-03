/*
Given a positive integer n, calculate the following sum:

n + n/2 + n/4 + n/8 + ...
All elements of the sum are the results of integer division.

Example
25  =>  25 + 12 + 6 + 3 + 1 = 47
*/


//Answer
function halvingSum(n) {

  let apples = 0

  while (n >= 1) {
    apples += n
    n = Math.floor((n * 1) / 2);

  }

  return apples

}



const Test = require('@codewars/test-compat');

describe("Test Case", function () {
  it("Test", function () {
    Test.assertEquals(halvingSum(25), 47);
    Test.assertEquals(halvingSum(127), 247);
  });
});

