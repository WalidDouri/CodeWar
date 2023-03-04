/*
Debug the functions
Should be easy, begin by looking at the code. Debug the code and the functions should work.

There are three functions: Multiplication (x) Addition (+) and Reverse (!esreveR)

*/


//Answer

function multi(arr) {
  return arr.reduce((acc, curr) => acc * curr, 1);
}
function add(arr) {
  return arr.reduce((acc, curr) => acc + curr, 0);
}
function reverse(str) {
  return str.split('').reverse().join('');
}


const Test = require('@codewars/test-compat');

describe("Tests", () => {
  it("test", () => {
    Test.assertEquals(multi([5, 1, 5]), 25);
    Test.assertEquals(add([9, 8, 5]), 22);
  });
});
