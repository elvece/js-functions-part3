var code = require('../js/main.js');

//problem 1
describe('#getStudentName', function() {
  it('print the name of the person from the array', function() {
    var person = {name: 'Michael', age: 27 };
    expect(code.getStudentName(person)).toEqual('Michael');
  });
});
//problem 2
describe('#getTotalLetters', function() {
  it('get the total length of the string from the array', function() {
    var stringArray = ['javascript', 'is', 'not', 'python'];
    expect(code.getTotalLetters(stringArray)).toEqual(21);
  });
});
//problem 3
describe('#createObject', function() {
  it('creates an object', function() {
    expect(code.createObject('City', 'Boulder')).toEqual( {City: "Boulder"});
  });
});
//problem 4
describe('#getNegativeIndex', function() {
  it('returns the value at the negative index', function() {
    var letterArray = ['a', 'b', 'c', 'd', 'e'];
    expect(code.getNegativeIndex(letterArray, -3)).toEqual('c');
  });
});
//problem 5
describe('#removeCharacter', function(){
  it('returns a string with the noted characters removed', function(){
    expect(code.removeCharacter('javascript', 'a').toEqual('jvscript'));
    expect(code.removeCharacter('12345', '2').toEqual('1345'));
  });
});
//problem 6
describe('#outputObject', function(){
  it('takes an object and returns a key value pair in format: key is value', function(){
    var ages = {john: 10, jerry: 11, jenny: 12 };
    expect(code.outputObject(ages).toEqual('john is 10, jerry is 11, jenny is 12'));
  });
});
//problem 7
describe('#getVowels', function(){
  it('returns all the vowels in a string without duplicates', function(){
    expect(code.getVowels('javascripting').toEqual(['a', 'i']));
  });
});
//problem 8
describe('#captureTwins', function(){
  it('returns true if every adjacent pair of items in the array is the same', function(){
    expect(code.captureTwins("['m', 'm', 'n', 'n', 's', 's']").toEqual(true));
    expect(code.captureTwins("['m', 'm', 'm', 'n', 's', 's']").toEqual(false));
  });
});
//problem 9
describe('#testBooleanLogic', function(){
  it('returns true if any value in array is true',function(){
    expect(code.testBooleanLogic([false, true, false, false])).toEqual(true);
    expect(code.testBooleanLogic([false, false, false])).toEqual(false);
  });
});

//problem 10
describe("#getUniqueValues", function(){
  it('returns a new array of unique values', function(){
    expect(code.getUniqueValues(['m', 'n', 'm', 'r', 'r', 's'])).toEqual(['m', 'n', 'r', 's']);
    expect(code.getUniqueValues(['michael', 'ben', 'kerry', 'ben'])).toEqual(['michael', 'ben', 'kerry']);
  });
});
