/*
The following code is not giving the expected results. Can you debug what the issue is?

The following is an example of data that would be passed in to the function.

var data = [
  {name: 'Joe', age: 20},
  {name: 'Bill', age: 30},
  {name: 'Kate', age: 23}
]

getNames(data) // should return ['Joe', 'Bill', 'Kate']
*/

//ANsswer

function getNames(data) {

  let apples = data.map(item => item.name)

  return apples
}

const Test = require('@codewars/test-compat');

describe('getNames(data)', function () {
  it('should return the names of the people passed in', function () {
    const data = [
      { name: 'Joe', age: 20 },
      { name: 'Bill', age: 30 },
      { name: 'Kate', age: 23 }
    ]
    Test.assertSimilar(getNames(data), ['Joe', 'Bill', 'Kate'])
  });
});
