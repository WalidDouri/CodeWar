/*
Count the number of divisors of a positive integer n.

Random tests go up to n = 500000.

Examples (input --> output)
4 --> 3 (1, 2, 4)
5 --> 2 (1, 5)
12 --> 6 (1, 2, 3, 4, 6, 12)
30 --> 8 (1, 2, 3, 5, 6, 10, 15, 30)
*/

//Answer

function getDivisorsCnt(n) {
  let count = 0;
  for (let i = 1; i <= Math.sqrt(n); i++) {
    if (n % i == 0) {
      if (n / i == i)
        count++;
      else {
        count += 2
      }
    }
  }
  return cnt;
}

describe("Tests", () => {
  it("test", () => {
    Test.assertEquals(getDivisorsCnt(1), 1);
    Test.assertEquals(getDivisorsCnt(10), 4);
    Test.assertEquals(getDivisorsCnt(11), 2);
    Test.assertEquals(getDivisorsCnt(54), 8);
  });
});