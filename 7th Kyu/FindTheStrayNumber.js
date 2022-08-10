/*
You are given an odd-length array of integers, in which all of them are the same, except for one single number.

Complete the method which accepts such an array, and returns that single different number.

The input array will always be valid! (odd-length >= 3)

Examples
[1, 1, 2] ==> 2
[17, 17, 3, 17, 17, 17, 17] ==> 3
*/

//Answer

function stray(numbers) {
  let apples = numbers.sort();
  return apples[0] !== apples[1] ? apples[0] : apples[apples.length - 1]
}

describe("Tests", () => {
  it("test", () => {
    Test.assertEquals(stray([1, 1, 2]), 2);
  });
});
