/*
Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

Examples
pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway !
*/

//ANswer

function pigIt(str) {
  let newString = [];
  let apples = str.split(" ");

  for (let i = 0; i < apples.length; i++) {
    //     console.log(apples[i].length)
    if (apples[i].match(/[A-z]/i)) {
      newString.push(apples[i].substring(1) + apples[i].substr(0, 1) + "ay")
    } else {
      newString.push[i]
    }
  }
  //   console.log(newString)
  return newString.join(' ')
}

describe("Tests", () => {
  it("test", () => {
    Test.assertEquals(pigIt('Pig latin is cool'), 'igPay atinlay siay oolcay')
    Test.assertEquals(pigIt('This is my string'), 'hisTay siay ymay tringsay')
  });
});
