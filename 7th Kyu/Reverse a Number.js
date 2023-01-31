/*
Given a number, write a function to output its reverse digits. (e.g. given 123 the answer is 321)

Numbers should preserve their sign; i.e. a negative number should still be negative when reversed.

Examples
 123 ->  321
-456 -> -654
1000 ->    1
*/

//ANswer

function reverseNumber(n) {
  // ...

  if (n < 0) {
    let cheese = (n.toString().split('').splice(1).reverse().join('') * 1) * -1
    return cheese
    console.log(cheese)

  } else {
    let apples = n.toString().split('').reverse().join('') * 1
    return apples
  }

}

describe("Sample tests", () => {
  Test.assertEquals(reverseNumber(123), 321)
  Test.assertEquals(reverseNumber(-123), -321, 'Negative Numbers should be preserved')
  Test.assertEquals(reverseNumber(1000), 1, 'Should handle numbers ending with "0"')
  Test.assertEquals(reverseNumber(4321234), 4321234)
  Test.assertEquals(reverseNumber(5), 5)
  Test.assertEquals(reverseNumber(0), 0)
  Test.assertEquals(reverseNumber(98989898), 89898989)
});
