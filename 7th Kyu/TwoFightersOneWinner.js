/*
Create a function that returns the name of the winner in a fight between two fighters.

Each fighter takes turns attacking the other and whoever kills the other first is victorious. Death is defined as having health <= 0.

Each fighter will be a Fighter object/instance. See the Fighter class below in your chosen language.

Both health and damagePerAttack (damage_per_attack for python) will be integers larger than 0. You can mutate the Fighter objects.

Example:
  declare_winner(Fighter("Lew", 10, 2), Fighter("Harry", 5, 4), "Lew") => "Lew"
  
  Lew attacks Harry; Harry now has 3 health.
  Harry attacks Lew; Lew now has 6 health.
  Lew attacks Harry; Harry now has 1 health.
  Harry attacks Lew; Lew now has 2 health.
  Lew attacks Harry: Harry now has -1 health and is dead. Lew wins.
function Fighter(name, health, damagePerAttack) {
        this.name = name;
        this.health = health;
        this.damagePerAttack = damagePerAttack;
        this.toString = function() { return this.name; }
}
*/

//Answers

function Fighter(name, health, damagePerAttack) {
  this.name = name;
  this.health = health;
  this.damagePerAttack = damagePerAttack;
  this.toString = function () { return this.name; }
}

// for loop while loop? 
// maybe find number of attacks each fighter can take and compare
// only return the winners name// if statement 
function declareWinner(fighter1, fighter2, firstAttacker) {
  let i = 0;
  if (firstAttacker === fighter1.name) {
    i = 1;
  }
  for (i; (fighter1.health > 0) && (fighter2.health > 0); i++) {
    if (i % 2 === 0) {
      fighter1.health -= fighter2.damagePerAttack;
    } else {
      fighter2.health -= fighter1.damagePerAttack;
    }
  }
  if (fighter1.health > 0) {
    return fighter1.name;
  } else {
    return fighter2.name;
  }
}

// BEST Answers

function declareWinner(fighter1, fighter2, firstAttacker) {
  let fac1 = Math.ceil(fighter1.health / fighter2.damagePerAttack);
  let fac2 = Math.ceil(fighter2.health / fighter1.damagePerAttack);
  if (fac1 < fac2) {
    return fighter2.name;
  } else if (fac2 < fac1) {
    return fighter1.name;
  } else {
    return firstAttacker;
  }
}


const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Two fighters, one winner.", () => {
  it("Example Test Cases", () => {

    assert.strictEqual(declareWinner(new Fighter("Lew", 10, 2), new Fighter("Harry", 5, 4), "Lew"), "Lew");

    assert.strictEqual(declareWinner(new Fighter("Lew", 10, 2), new Fighter("Harry", 5, 4), "Harry"), "Harry");

    assert.strictEqual(declareWinner(new Fighter("Harald", 20, 5), new Fighter("Harry", 5, 4), "Harry"), "Harald")

    assert.strictEqual(declareWinner(new Fighter("Harald", 20, 5), new Fighter("Harry", 5, 4), "Harald"), "Harald")

    assert.strictEqual(declareWinner(new Fighter("Jerry", 30, 3), new Fighter("Harald", 20, 5), "Jerry"), "Harald")

    assert.strictEqual(declareWinner(new Fighter("Jerry", 30, 3), new Fighter("Harald", 20, 5), "Harald"), "Harald")

  });
});