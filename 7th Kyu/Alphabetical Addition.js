/*
Your task is to add up letters to one letter.

The function will be given a variable amount of arguments, each one being a letter to add.

Notes:
Letters will always be lowercase.
Letters can overflow (see second to last example of the description)
If no letters are given, the function should return 'z'
Examples:
addLetters('a', 'b', 'c') = 'f'
addLetters('a', 'b') = 'c'
addLetters('z') = 'z'
addLetters('z', 'a') = 'a'
addLetters('y', 'c', 'b') = 'd' // notice the letters overflowing
addLetters() = 'z'
Confused? Roll your mouse/tap over here
*/

//ANswer

function addLetters(...letters) {
  // your code here
  let x = 0

  if (letters.length == 0) {
    return 'z'
  }

  for (let i = 0; i < letters.length; i++) {
    x += letters[i].charCodeAt(0) - 96
    if (x > 26) {
      x = x - 26
    }
  }
  return String.fromCharCode((x) + 96)
}


const { assert } = require('chai');

describe("Fixed tests", () => {
  const tests = [
    [['a', 'b', 'c'], 'f'],
    [['z'], 'z'],
    [['a', 'b'], 'c'],
    [['c'], 'c'],
    [['z', 'a'], 'a'],
    [['y', 'c', 'b'], 'd'],
    [[], 'z']
  ];
  tests.forEach(test => {
    const str = test[0].map(x => `"${x}"`).join(', ');
    it(`addLetters(${str})`, () => {
      assert.strictEqual(addLetters(...test[0]), test[1]);
    });
  });
});