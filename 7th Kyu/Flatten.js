/*
Write a function that flattens an Array of Array objects into a flat Array. Your function must only do one level of flattening.

flatten([1,2,3]) // => [1,2,3]
flatten([[1,2,3],["a","b","c"],[1,2,3]])  // => [1,2,3,"a","b","c",1,2,3]
flatten([[[1,2,3]]]) // => [[1,2,3]]
*/

//Answer
var flatten = function (array) {
  // TODO: Program me

  return [].concat(...array);
  // flattened is [0, 1, 2, 3, 4, 5]

}

const Test = require('@codewars/test-compat');

describe("Tests", () => {
  it("test", () => {
    Test.assertSimilar(flatten([]), []);
    Test.assertSimilar(flatten([1, 2, 3]), [1, 2, 3]);
    Test.assertSimilar(flatten([[1, 2, 3], ["a", "b", "c"], [1, 2, 3]]), [1, 2, 3, "a", "b", "c", 1, 2, 3]);
    Test.assertSimilar(flatten([[3, 4, 5], [[9, 9, 9]], ["a,b,c"]]), [3, 4, 5, [9, 9, 9], "a,b,c"]);
    Test.assertSimilar(flatten([[[3], [4], [5]], [9], [9], [8], [[1, 2, 3]]]), [[3], [4], [5], 9, 9, 8, [1, 2, 3]]);
  });
});

