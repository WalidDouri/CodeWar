/*
Write a method that takes one argument as name and then greets that name, capitalized and ends with an exclamation point.

Example:

"riley" --> "Hello Riley!"
"JACK"  --> "Hello Jack!"
*/

//Answer

var greet = function (name) {

  let newStr = name.slice(0, 1).toUpperCase()
  let apples = name.toLowerCase().split("").splice(1, name.length).join("")

  return `Hello ${newStr}${apples}!`
  //fun

};


const Test = require('@codewars/test-compat');

describe("Tests", () => {
  it("test", () => {
    // Create your own tests here. These are some of the methods available:
    //  Test.expect(boolean, [optional] message) 
    //  Test.assertEquals(actual, expected, [optional] message)
    //  Test.assertSimilar(actual, expected, [optional] message)
    //  Test.assertNotEquals(actual, expected, [optional] message) 
    Test.assertEquals(greet('riley'), 'Hello Riley!');
  });
});
