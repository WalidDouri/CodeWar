/*
The code provided is supposed return a person's Full Name given their first and last names.

But it's not working properly.

Notes
The first and/or last names are never null, but may be empty.

Task
Fix the bug so we can all go home early.
*/

//Answer

class Dinglemouse {

  constructor(firstName, lastName) {
    this.firstName = firstName
    this.lastName = lastName
  }
  getFullName() {
    if (this.firstName.length > 0 && this.lastName.length > 0) {
      return (this.firstName + " " + this.lastName)
    } else if (this.firstName.length > 0) {
      return (this.firstName)
    } else {
      return this.lastName
    }
  }


}

describe("Tests", () => {
  it("test", () => {
    Test.assertEquals(new Dinglemouse("Clint", "Eastwood").getFullName(), "Clint Eastwood");

  });
});
