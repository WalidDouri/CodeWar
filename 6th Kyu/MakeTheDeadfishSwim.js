/*
Write a simple parser that will parse and run Deadfish.

Deadfish has 4 commands, each 1 character long:

i increments the value (initially 0)
d decrements the value
s squares the value
o outputs the value into the return array
Invalid characters should be ignored.

parse("iiisdoso") => [ 8, 64 ]
*/

//Answers

// Return the output array, and ignore all non-op characters
function parse(data) {

  let apples = data.split('');
  let count = 0
  let arr = []

  for (let i = 0; i < apples.length; i++) {
    if (apples[i] === 'i') {
      count++
    } else if (apples[i] === 'd') {
      count--
    } else if (apples[i] === 's') {
      count = count * count
    } else if (apples[i] === 'o') {
      arr.push(count)
    }
  }

  return arr

}

describe("Tests", () => {
  it("test", () => {
    Test.assertDeepEquals(parse("iiisdoso"), [8, 64]);
    Test.assertDeepEquals(parse("iiisxxxdoso"), [8, 64]);
  });
});
