/*
You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

Examples
[7, 1]  =>  [1, 7]
[5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
[9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]

*/

//ANswer

function sortArray(array) {
  // Return a sorted array.
  let odd = []
  let even = []
  let finalArr = []

  //seperate the odd and even values
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      even.push(array[i])
    } else {
      odd.push(array[i])
    }
  }

  // sort odd numbers in acending
  odd.sort((a, b) => a - b)

  // maybe filter? map? shift? 
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] % 2 === 0) {
      finalArr.push(even.shift());
    } else {
      finalArr.push(odd.shift());
    }
  }
  return finalArr
}

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Sample Tests", () => {
  it("should pass some sample tests", () => {
    assert.deepEqual(sortArray([5, 3, 2, 8, 1, 4]), [1, 3, 2, 8, 5, 4]);
    assert.deepEqual(sortArray([5, 3, 1, 8, 0]), [1, 3, 5, 8, 0]);
    assert.deepEqual(sortArray([]), []);
  });
});
