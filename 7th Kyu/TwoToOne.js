/*
Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

Examples:
a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
longest(a, b) -> "abcdefklmopqwxy"

a = "abcdefghijklmnopqrstuvwxyz"
longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

*/


//Answer

function longest(s1, s2) {
  return [...new Set(s1 + s2).split(' ')];
}


def longest(a1, a2):
return "".join(sorted(set(a1 + a2)))

// https://www.geeksforgeeks.org/how-to-remove-duplicate-elements-from-javascript-array/




describe("longest", function () {
  it("Basic tests", function () {
    Test.assertEquals(longest("aretheyhere", "yestheyarehere"), "aehrsty")
    Test.assertEquals(longest("loopingisfunbutdangerous", "lessdangerousthancoding"), "abcdefghilnoprstu")
    Test.assertEquals(longest("inmanylanguages", "theresapairoffunctions"), "acefghilmnoprstuy")
  })
})