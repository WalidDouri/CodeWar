/*
Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

For example:

uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1,2,2,3,3])       == [1,2,3]
*/

var uniqueInOrder = function (iterable) {
  //your code here - remember iterable can be a string or an array
  // iterrate through array after spliting string and see if the previous is the same as the present 
  //   if so push into new array and return
  let cheese = []
  let apples = Array.isArray(iterable) ? iterable : iterable.split('');
  for (let i = 0; i < apples.length; i++) {
    if (apples[i] !== apples[i + 1]) {
      cheese.push(apples[i])
    }
  }
  return cheese
}

describe("Tests", () => {
  it("test", () => {
    Test.assertSimilar(uniqueInOrder('AAAABBBCCDAABBB'), ['A', 'B', 'C', 'D', 'A', 'B'])
  });
});
