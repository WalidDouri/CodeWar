/*
Write function bmi that calculates body mass index (bmi = weight / height2).

if bmi <= 18.5 return "Underweight"

if bmi <= 25.0 return "Normal"

if bmi <= 30.0 return "Overweight"

if bmi > 30 return "Obese"


*/


//Answers
function bmi(weight, height) {

  let apples = (weight / (height * height))
  if (apples <= 18.5) {
    return "Underweight";
  }
  if (apples <= 25.0) {
    return "Normal";
  }
  if (apples <= 30.0) {
    return "Overweight";
  }
  if (apples > 30) {
    return "Obese";
  }
  return null;
}

const Test = require('@codewars/test-compat');

describe("Tests", () => {
  it("test", () => {
    Test.assertEquals(bmi(80, 1.80), "Normal");
  });
});
