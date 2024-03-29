/*
The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array or list of integers:

maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
// should be 6: [4, -1, 2, 1]
Easy case is when the list is made up of only positive numbers and the maximum sum is the sum of the whole array. If the list is made up of only negative numbers, return 0 instead.

Empty list is considered to have zero greatest sum. Note that the empty list or array is also a valid sublist/subarray.

*/


//Answers are
var maxSequence = function (arr) {
  // ...
  let apples = 0
  let max = 0

  if (arr.length === 0) {
    return 0
  }

  for (let i = 0; i < arr.length; i++) {
    apples = Math.max(0, apples + arr[i]);
    max = Math.max(apples, max);
  }
  return max
}


//if arr is all positive sum them
// if array is all neg return 0
// if arr = empty return 0



describe("maxSequence", function () {
  it("should work on an empty array", function () {
    Test.assertEquals(maxSequence([]), 0);
  });
  it("should work on the example", function () {
    Test.assertEquals(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]), 6);
  });
});