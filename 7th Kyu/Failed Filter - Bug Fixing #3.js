/*
Failed Filter - Bug Fixing #3
Oh no, Timmy's filter doesn't seem to be working? Your task is to fix the FilterNumber function to remove all the numbers from the string.
*/

//Answer
var FilterNumbers = function (str) {
  return str.split('').filter(c => c.match(/[a-zA-Z]/g)).join('');
}

describe('Fixed Tests', () => {
  Test.assertEquals(FilterNumbers("test123"), 'test', 'Just return the string');
  Test.assertEquals(FilterNumbers("a1b2c3"), 'abc', 'Just return the string');
  Test.assertEquals(FilterNumbers("aa1bb2cc3dd"), 'aabbccdd', 'Just return the string');
});