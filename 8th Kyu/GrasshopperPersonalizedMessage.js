/*
Create a function that gives a personalized greeting. This function takes two parameters: name and owner.

Use conditionals to return the proper message:

case	return
name equals owner	'Hello boss'
otherwise	'Hello guest'

*/

//Answer
function greet(name, owner) {
  // Add code here
  return name === owner ? 'Hello boss' : 'Hello guest'

}




describe("Tests", () => {
  it("test", () => {
    Test.assertEquals(greet('Daniel', 'Daniel'), 'Hello boss')
    Test.assertEquals(greet('Greg', 'Daniel'), 'Hello guest')
  });
});
