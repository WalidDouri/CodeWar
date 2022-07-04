/*
Character recognition software is widely used to digitise printed texts. Thus the texts can be edited, searched and stored on a computer.

When documents (especially pretty old ones written with a typewriter), are digitised character recognition softwares often make mistakes.

Your task is correct the errors in the digitised text. You only have to handle the following mistakes:

S is misinterpreted as 5
O is misinterpreted as 0
I is misinterpreted as 1
The test cases contain numbers only by mistake.
*/

//Answer
function correct(string) {
  //map filter regex
  let apples = string.split('');
  let newString = []
  for (let i = 0; i < apples.length; i++) {
    if (apples[i] === '5') {
      newString.push('S')
    } else if (apples[i] === '0') {
      newString.push('O')
    } else if (apples[i] === '1') {
      newString.push('I')
    } else {
      newString.push(apples[i])
    }
  }
  //   console.log(apples)
  return newString.join('');


  //Best Answer
  function correct(string) {
    return string.replace(/0/g, "O")
      .replace(/5/g, "S")
      .replace(/1/g, "I");
  }


  const chai = require("chai");
  const assert = chai.assert;
  chai.config.truncateThreshold = 0;

  describe("Tests", () => {
    it("test", () => {
      assert.strictEqual(correct("L0ND0N"), "LONDON");
      assert.strictEqual(correct("DUBL1N"), "DUBLIN");
      assert.strictEqual(correct("51NGAP0RE"), "SINGAPORE");
      assert.strictEqual(correct("BUDAPE5T"), "BUDAPEST");
      assert.strictEqual(correct("PAR15"), "PARIS");
    });
  });
