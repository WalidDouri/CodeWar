/*
Write a function that returns a string in which firstname is swapped with last name.

Example(Input --> Output)

"john McClane" --> "McClane john"
*/

//Answer

function nameShuffler(str) {
  let apples = str.split(' ');
  console.log(apples)
  return apples[1] + " " + apples[0]
}



describe("Tests", () => {
  it("test", () => {
    Test.assertEquals(nameShuffler('john McClane'), 'McClane john');
  });
});
