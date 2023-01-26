/*
Kids drink toddy.
Teens drink coke.
Young adults drink beer.
Adults drink whisky.
Make a function that receive age, and return what they drink.

Rules:

Children under 14 old.
Teens under 18 old.
Young under 21 old.
Adults have 21 or more.
Examples: (Input --> Output)

13 --> "drink toddy"
17 --> "drink coke"
18 --> "drink beer"
*/

//Answer
function peopleWithAgeDrink(old) {
  if (old < 14) {
    return "drink toddy"
  } else if ((old < 18) && (old >= 14)) {
    return "drink coke"
  } else if ((old < 21) && (old >= 18)) {
    return "drink beer";
  } else if (old >= 21) {
    return "drink whisky"
  }
}

const { assert } = require("chai")

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(peopleWithAgeDrink(22), 'drink whisky');
  })
})