/*
Create a function named divisors/Divisors that takes an integer n > 1 and returns an array with all of the integer's divisors(except for 1 and the number itself), from smallest to largest. If the number is prime return the string '(integer) is prime' (null in C#) (use Either String a in Haskell and Result<Vec<u32>, String> in Rust).

Example:
divisors(12); // should return [2,3,4,6]
divisors(25); // should return [5]
*/



//Answers
function divisors(integer) {
  let arr = [
  ]

  for (let i = 2; i < integer - 1; i++) {
    if (integer % i === 0) {
      arr.push(i);
    }
  }
  return arr.length ? arr : integer + ' is prime';

};



describe("Tests", () => {
  it("test", () => {
    Test.assertDeepEquals(divisors(15), [3, 5]);
    Test.assertDeepEquals(divisors(12), [2, 3, 4, 6]);
    Test.assertDeepEquals(divisors(13), "13 is prime");
  });
});
