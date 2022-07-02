/*
Write Number in Expanded Form
You will be given a number and you will need to return it as a string in Expanded Form. For example:

expandedForm(12); // Should return '10 + 2'
expandedForm(42); // Should return '40 + 2'
expandedForm(70304); // Should return '70000 + 300 + 4'
NOTE: All numbers will be whole numbers greater than 0.

If you liked this kata, check out part 2!!
*/

//Answers
function expandedForm(num) {
  // Your code here
  let apples = num.toString().split('')

  for (let i = 0; i < apples.length; i++) {
    if (apples[i] != 0) {
      for (let y = apples.length - i; y > 1; y--) {
        apples[i] += '0';
      }
    }
  }
  apples = apples.filter(x => x !== '0')
  return apples.join(' + ')
}

describe("Tests", () => {
  it("test", () => {
    Test.assertEquals(expandedForm(12), '10 + 2');
    Test.assertEquals(expandedForm(42), '40 + 2');
    Test.assertEquals(expandedForm(70304), '70000 + 300 + 4');
  });
});
