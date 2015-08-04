var code = require('../js/main.js');


describe('module', function() {
  it('print the name of the person from the array', function() {
    var person = {name: 'Michael', age: 27 };
    expect(code.getStudentName(person)).toEqual('Michael');
  });
});

describe('module', function() {
  it('get the total length of the string from the array', function() {
    var stringArray = ['javascript', 'is', 'not', 'python'];
    expect(code.getTotalLetters(stringArray)).toEqual(21);
  });
});

describe('module', function() {
  it('creates an object', function() {
    expect(code.createObject('City', 'Boulder')).toEqual( {City: "Boulder"});
  });
});

describe('module', function() {
  it('returns the value at the negative index', function() {
    var letterArray = ['a', 'b', 'c', 'd', 'e'];
    expect(code.getNegativeIndex(letterArray, -3)).toEqual('c');
  });
});
