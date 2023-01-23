/*Build Tower
Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.

For example, a tower with 3 floors looks like this:

[
  "  *  ",
  " *** ", 
  "*****"
]
And a tower with 6 floors looks like this:

[
  "     *     ", 
  "    ***    ", 
  "   *****   ", 
  "  *******  ", 
  " ********* ", 
  "***********"
]

*/

//Answer

function towerBuilder(nFloors) {
  // build here

  let apples = []
  let crackers = []
  let cheese = []


  for (let i = 1; i <= nFloors; i++) {
    let crackers = " ".repeat(nFloors - i);
    let cheese = "*".repeat((2 * i) - 1);
    apples.push(`${crackers}${cheese}${crackers}`)
  }
  return apples
}

const Test = require('@codewars/test-compat');

describe("Tests", () => {
  it("test", () => {
    Test.assertDeepEquals(towerBuilder(1), ["*"]);
    Test.assertDeepEquals(towerBuilder(2), [" * ", "***"]);
    Test.assertDeepEquals(towerBuilder(3), ["  *  ", " *** ", "*****"]);
  });
});
