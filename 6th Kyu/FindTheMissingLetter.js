/*
#Find the missing letter

Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.

You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
The array will always contain letters in only one case.

Example:

['a','b','c','d','f'] -> 'e' ['O','Q','R','S'] -> 'P'

["a","b","c","d","f"] -> "e"
["O","Q","R","S"] -> "P"
(Use the English alphabet with 26 letters!)

Have fun coding it and please don't forget to vote and rank this kata! :-)

I have also created other katas. Take a look if you enjoyed this kata!


*/


//Answer

function findMissingLetter(array) {
  let firstLetter = array[0].charCodeAt(0);
  for (let i = 0; i < array.length; i++) {
    if (firstLetter + i !== array[i].charCodeAt(0)) {
      return String.fromCharCode(firstLetter + i)
    }
  }
  //   return ' ';
}

describe("KataTests", function () {
  it("exampleTests", function () {
    Test.assertEquals(findMissingLetter(['a', 'b', 'c', 'd', 'f']), 'e');
    Test.assertEquals(findMissingLetter(['O', 'Q', 'R', 'S']), 'P');
  });
});