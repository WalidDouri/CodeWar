/*
Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

Examples input/output:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false
*/


//Answers 

function XO(str) {
  //code here
  let um = str.toLowerCase().split('')
  let uniqueItems = [...new Set(um)]
  let apples = uniqueItems[0]
  let pears = uniqueItems[1]
  let secondCount = 0
  let firstCount = 0

  //   if (uniqueItems.length > 2) {
  //     return false
  //   }
  console.log(uniqueItems)
  console.log(pears)

  for (let i = 0; i < um.length; i++) {
    if (um[i] === apples) {
      secondCount++
    } else if (um[i] === pears) {
      firstCount++
    }
  }
  console.log(secondCount, firstCount)
  return secondCount === firstCount ? true : false
}




describe("Tests", () => {
  it("test", () => {
    Test.assertEquals(XO('xo'), true);
    Test.assertEquals(XO("xxOo"), true);
    Test.assertEquals(XO("xxxm"), false);
    Test.assertEquals(XO("Oo"), false);
    Test.assertEquals(XO("ooom"), false);
  });
});
