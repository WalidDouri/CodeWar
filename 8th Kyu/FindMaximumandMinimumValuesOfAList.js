/*
Your task is to make two functions ( max and min, or maximum and minimum, etc., depending on the language ) that receive a list of integers as input, and return the largest and lowest number in that list, respectively.

Examples (Input -> Output)
* [4,6,2,1,9,63,-134,566]         -> max = 566, min = -134
* [-52, 56, 30, 29, -54, 0, -110] -> min = -110, max = 56
* [42, 54, 65, 87, 0]             -> min = 0, max = 87
* [5]                             -> min = 5, max = 5
Notes
You may consider that there will not be any empty arrays/vectors.
*/


//Answer
var min = function (list) {
  let pear = list.sort(function (a, b) { return a - b });
  return pear[0];
}

var max = function (list) {
  let apples = list.sort(function (a, b) { return a - b });
  return apples[list.length - 1];
}



describe("Test", function () {
  it("Examples", function () {
    Test.assertEquals(min([-52, 56, 30, 29, -54, 0, -110]), -110);
    Test.assertEquals(min([42, 54, 65, 87, 0]), 0);
    Test.assertEquals(max([4, 6, 2, 1, 9, 63, -134, 566]), 566);
    Test.assertEquals(max([5]), 5);
  });
});