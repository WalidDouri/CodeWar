/*
Given two arrays of strings a1 and a2 return a sorted array r in lexicographical order of the strings of a1 which are substrings of strings of a2.

Example 1:
a1 = ["arp", "live", "strong"]

a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

returns ["arp", "live", "strong"]

Example 2:
a1 = ["tarp", "mice", "bull"]

a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

returns []

Notes:
Arrays are written in "general" notation. See "Your Test Cases" for examples in your language.
In Shell bash a1 and a2 are strings. The return is a string where words are separated by commas.
Beware: In some languages r must be without duplicates.
*/

//answer

function inArray(array1, array2) {

  let apples = [];
  array1 = array1.sort();

  for (let i = 0; i < array1.length; i++) {
    for (let j = 0; j < array2.length; j++) {
      if (array2[j].indexOf(array1[i]) !== -1) {
        apples.push(array1[i]);
        break;
      }
    }
  }
  return apples.sort();
}


function inArray(array1, array2) {
  return array1
    .filter(a1 => array2.find(a2 => a2.match(a1)))
    .sort()
}


const { assert, config } = require('chai');
config.truncateThreshold = 0;

describe("Tests", () => {
  it("test", () => {

    a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

    a1 = ["xyz", "live", "strong"]
    assert.sameOrderedMembers(inArray(a1, a2), ["live", "strong"])

    a1 = ["live", "strong", "arp"]
    assert.sameOrderedMembers(inArray(a1, a2), ["arp", "live", "strong"])

    a1 = ["tarp", "mice", "bull"]
    assert.sameOrderedMembers(inArray(a1, a2), [])
  });
});
