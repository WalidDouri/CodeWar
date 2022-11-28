/*
Task:
Your task is to write a function which returns the sum of following series upto nth term(parameter).

Series: 1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16 +...
Rules:
You need to round the answer to 2 decimal places and return it as String.

If the given value is 0 then it should return 0.00

You will only be given Natural Numbers as arguments.

Examples:(Input --> Output)
1 --> 1 --> "1.00"
2 --> 1 + 1/4 --> "1.25"
5 --> 1 + 1/4 + 1/7 + 1/10 + 1/13 --> "1.57"
*/

//Answer

function SeriesSum(n) {
  // Happy Coding ^_^
  console.log(n)
  if (n == 0) {
    return "0.00"
  }
  let denominator = 1
  let sum = 0
  while (n > 0) {
    console.log(n)
    sum += 1 / denominator;
    denominator += 3;
    n += -1;
  }
  return sum.toFixed(2)
}

describe("Tests", () => {
  it("test", () => {
    Test.assertEquals(SeriesSum(1), "1.00")
    Test.assertEquals(SeriesSum(2), "1.25")
    Test.assertEquals(SeriesSum(3), "1.39")
    Test.assertEquals(SeriesSum(4), "1.49")
  });
}