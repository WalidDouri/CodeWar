/*
You are given two arrays a1 and a2 of strings. Each string is composed with letters from a to z. Let x be any string in the first array and y be any string in the second array.

Find max(abs(length(x) − length(y)))

If a1 and/or a2 are empty return -1 in each language except in Haskell (F#) where you will return Nothing (None).

Example:
a1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"]
a2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"]
mxdiflg(a1, a2) --> 13
Bash note:
input : 2 strings with substrings separated by ,
output: number as a string

*/


function mxdiflg(a1, a2) {
  // your code
  let a1Small = Math.min(...a1.map(x => x.length));
  let a2Small = Math.min(...a2.map(x => x.length));

  let a1Large = Math.max(...a1.map(x => x.length));
  let a2Large = Math.max(...a2.map(x => x.length));

  if (a1.length === 0 || a2.length === 0) {
    return -1
  }

  let diffa1 = Math.abs(a1Small - a2Large)
  let diffa2 = Math.abs(a1Large - a2Small)

  console.log(diffa2)

  return diffa1 > diffa2 ? diffa1 : diffa2

}


const assert = require('chai').assert

describe("mxdiflg", function () {
  it("Basic tests", function () {
    var s1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"];
    var s2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"];
    assert.strictEqual(mxdiflg(s1, s2), 13);
  })
})