/*
Find out why the amount of honey in the hive is not increasing.
*/

//Answer
function Bee(capacity, hive) {
  this.capacity = capacity;
  this.hive = hive;
}

function Hive() {
  this.pollen = 100;
}

//TODO: The amount of honey in the hive is not increasing.
Hive.prototype.addPollen = function(pollen) {
  this.pollen += pollen;
}

Hive.prototype.getPollen = function() {
  return this.pollen;
}

Bee.prototype.unloadPollen = function() {
  this.hive.addPollen(this.capacity);
}

describe("Sample tests", function() {
  it("Tests", function() {
    let hive = new Hive();
    let bee = new Bee(11, hive);
    
    assert.equal(bee.capacity, 11, "the bee does not have the expected capacity");
    assert.equal(hive.pollen, 100, "hive.pollen does not have a valid value");
    
    bee.unloadPollen();
    
    assert.equal(hive.pollen, 111, "hive.pollen amount does not have a valid value");
  });
});