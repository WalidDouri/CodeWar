/*
Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

Examples:

* 'abc' =>  ['ab', 'c_']
* 'abcdef' => ['ab', 'cd', 'ef']
*/

//Answers 
function solution(str) {

  let apples = str.split('');
  let newArr = []

  if (apples.length % 2 !== 0) {
    str += "_"
  }

  for (let i = 0; i < apples.length; i += 2) {
    newArr.push(str[i] + str[i + 1])
  }
  return newArr
}

const { assert } = require('chai');

describe("Split Strings", () => {
  it("Basic tests", () => {
    assert.deepEqual(solution("abcdef"), ["ab", "cd", "ef"]);
    assert.deepEqual(solution("abcdefg"), ["ab", "cd", "ef", "g_"]);
    assert.deepEqual(solution(""), []);
  });
});