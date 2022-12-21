/*
Your task is to write function factorial.

https://en.wikipedia.org/wiki/Factorial
*/

//answer
function factorial(n) {
  //your code here

  let amount = []

  if (n <= 1) {
    return 1
  }

  for (let i = 1; i <= n; i++) {
    amount.push(i)
    console.log(amount)
  }

  let apples = amount.reduce((a, b) => a * b, 1)

  return apples
}


describe("Basic tests", () => {
  Test.assertEquals(factorial(0), 1);
  Test.assertEquals(factorial(1), 1);
  Test.assertEquals(factorial(4), 24);
  Test.assertEquals(factorial(7), 5040);
  Test.assertEquals(factorial(17), 355687428096000);
})