/*
What is an anagram? Well, two words are anagrams of each other if they both contain the same letters. For example:

'abba' & 'baab' == true

'abba' & 'bbaa' == true

'abba' & 'abbba' == false

'abba' & 'abca' == false
Write a function that will find all the anagrams of a word from a list. You will be given two inputs a word and an array with words. You should return an array of all the anagrams or an empty array if there are none. For example:

anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']) => ['aabb', 'bbaa']

anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']) => ['carer', 'racer']

anagrams('laser', ['lazing', 'lazy',  'lacer']) => []
Note for Go
For Go: Empty string slice is expected when there are no anagrams found.
*/

//Answer

function anagrams(word, words) {
  let pear = word.split("").sort().join("");
  console.log(pear)
  let countB = []

  for (let i = 0; i < words.length; i++) {
    if (pear === words[i].split('').sort().join("")) {
      countB.push(words[i])
    }
  }
  return countB
}

const assert = require("chai").assert;

describe("Anagrams", function () {
  it("should return a list of all anagrams", function () {
    assert.deepEqual(anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']), ['aabb', 'bbaa']);
    assert.deepEqual(anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']), ['carer', 'racer']);
  });

  it("should return an empty array for no anagrams", function () {
    assert.deepEqual(anagrams('laser', ['lazing', 'lazy', 'lacer']), []);
  });
});