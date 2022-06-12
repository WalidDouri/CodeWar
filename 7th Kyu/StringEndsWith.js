/*
Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

Examples:

solution('abc', 'bc') // returns true
solution('abc', 'd') // returns false
*/


//Answer
function solution(str, ending) {
  let pears = ending.length
  let orange = str.length
  let apples = str.substring(orange - pears)
  return apples === ending ? true : false
}



describe("Tests", () => {
  it("test", () => {
    Test.assertEquals(solution('abcde', 'cde'), true)
    Test.assertEquals(solution('abcde', 'abc'), false)
  });
});
