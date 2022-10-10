/*
In this Kata, you will be given a string that may have mixed uppercase and lowercase letters and your task is to convert that string to either lowercase only or uppercase only based on:

make as few changes as possible.
if the string contains equal number of uppercase and lowercase letters, convert the string to lowercase.
For example:

solve("coDe") = "code". Lowercase characters > uppercase. Change only the "D" to lowercase.
solve("CODe") = "CODE". Uppercase characters > lowecase. Change only the "e" to uppercase.
solve("coDE") = "code". Upper == lowercase. Change all to lowercase.
More examples in test cases. Good luck!

Please also try:

Simple time difference

Simple remove duplicates
*/


//Answer

function solve(s) {
  //..
  let apples = s.split('');

  let countLower = 0
  let countUpper = 0

  for (let i = 0; i < apples.length; i++) {
    if (apples[i].toLowerCase() === apples[i]) {
      countLower++
    } else {
      countUpper++
    }
  }

  let cheese = s.toUpperCase();
  let pear = s.toLowerCase();

  return countLower >= countUpper ? pear : cheese

}

describe("Basic tests", function () {
  Test.assertEquals(solve("code"), "code");
  Test.assertEquals(solve("CODe"), "CODE");
  Test.assertEquals(solve("COde"), "code");
  Test.assertEquals(solve("Code"), "code");
});
