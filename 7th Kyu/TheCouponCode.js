/*
Story
Your online store likes to give out coupons for special occasions. Some customers try to cheat the system by entering invalid codes or using expired coupons.

Task
Your mission:
Write a function called checkCoupon which verifies that a coupon code is valid and not expired.

A coupon is no more valid on the day AFTER the expiration date. All dates will be passed as strings in this format: "MONTH DATE, YEAR".

Examples:
checkCoupon("123", "123", "July 9, 2015", "July 9, 2015")  ===  true
checkCoupon("123", "123", "July 9, 2015", "July 2, 2015")  ===  false
*/

//ANswer
function checkCoupon(enteredCode, correctCode, currentDate, expirationDate) {
  var month = ["January", "February", "March", "April", "May", "June", "July",
    "August", "September", "October", "November", "December"];

  let apples = expirationDate.split(" ");
  let cheese = currentDate.split(" ");
  // let pear = month.indexOf(month[3])

  console.log(cheese[2])
  if (enteredCode === correctCode && apples[2] < cheese[2]) {
    return true
  } else {
    return false
  }
}


describe("Tests", () => {
  it("test", () => {
    Test.assertEquals(checkCoupon('123', '123', 'September 5, 2014', 'October 1, 2014'), true);
    Test.assertEquals(checkCoupon('123a', '123', 'September 5, 2014', 'October 1, 2014'), false);
  });
});
