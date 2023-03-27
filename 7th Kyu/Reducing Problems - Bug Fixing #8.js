/*
Reducing Problems - Bug Fixing #8
Oh no! Timmy's reduce is causing problems, Timmy's goal is to calculate the two teams scores and return the winner but timmy has gotten confused and sometimes teams don't enter their scores, total the scores out of 3! Help timmy fix his program!

Return true if team 1 wins or false if team 2 wins!
*/

//Answer

function calculateTotal(team1, team2) {

  if (team1.length === 0) {
    return false
  } else if (team2.length === 0) {
    return true
  }
  var t1s = team1.reduce((t, c) => t + c);
  var t2s = team2.reduce((t, c) => t + c);


  return t1s > t2s ? true : false;
}

describe('Fixed Tests', () => {
  Test.assertEquals(calculateTotal([1, 2, 2], [1, 0, 0]), true, 'Calculate the Winner!');
  Test.assertEquals(calculateTotal([6, 45, 1], [1, 55, 0]), false, 'Calculate the Winner!');
  Test.assertEquals(calculateTotal([57, 2, 1], []), true, 'Calculate the Winner!');
  Test.assertEquals(calculateTotal([], [3, 4, 3]), false, 'Calculate the Winner!');
});