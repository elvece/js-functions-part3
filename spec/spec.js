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

describe('module', function(){
  it('returns a string with the noted characters removed', function(){
    expect(code.removeCharacter('javascript', 'a').toEqual('jvscript'));
    expect(code.removeCharacter('12345', '2').toEqual('1345'));
  });
});

describe('module', function(){
  it('takes an object and returns a key value pair in format: key is value', function(){
    var ages = {john: 10, jerry: 11, jenny: 12 };
    expect(code.outputObject(ages).toEqual('john is 10', 'jerry is 11', 'jenny is 12'));
  });
});

describe('module', function(){
  it('returns all the vowels in a string without duplicates', function(){
    expect(code.getVowels('javascripting').toEqual(['a', 'i']));
  });
});

