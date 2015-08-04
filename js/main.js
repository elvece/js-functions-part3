//Example
function test(str) {
  return "test" + str;
}
console.log(test("ing"));

//Problem 1: function that takes a single object as an argument and returns the value of the name property/key
var person = {name: 'Michael', age: 27 };

function getStudentName(arr){
  return arr.name;
}
console.log(getStudentName(person));

//Problem 2: function that takes an array of strings as an argument and returns the total number of letters in all strings
var stringArray = ['javascript', 'is', 'not', 'python'];

function getTotalLetters(stringArr){
  return stringArr.join("").length;
}
console.log(getTotalLetters(stringArray));

//Problem 3: function that takes two arguments and returns a new object with a key of the first argument and the value of the second argument
function createObject(key, value){
  var obj = {};
  obj[key] = value;//key in brackets because passing in a string, .key passes in the actual word key rather than using the argument
  return obj;
}
console.log(createObject('City', 'Boulder'));

//Problem 4: function that takes an array and a negative number as arguments and returns the value from the array at the given negative index
var letterArray = ['a', 'b', 'c', 'd', 'e'];

function getNegativeIndex(arr, index){
  //starts at first item in array and goes back the number of index argument


}
console.log(getNegativeIndex(letterArray, -3));

//Problem 5: function that takes a string and a single character (string or integer) as arguments and returns the string with the characters removed
function removeCharacter (str, charToRemove){
  str.replace( new RegExp(charToRemove.toString(), "gi" ), "" );

  return str;
}
console.log(removeCharacter('javascript', 'a'));
console.log(removeCharacter('javascript', '1'));
console.log(removeCharacter('12345', '2'));

//Problem 6: function that takes an object as an argument and returns each key-value pair in the following format: key is value
var ages = {john: 10, jerry: 11, jenny: 12 };

function outputObject(key, value){



}
console.log(outputObject(ages));

//Problem 7: function that takes a string as an argument and returns an array of all the vowels in the string, not includind duplicates.
function getVowels(str){



}
console.log(getVowels('javascripting'));

//Problem 8: function that takes an array as an argument and returns true if every adjacent pair of items in the array is the same, otherwise returns false
function captureTwins (arr){



}
console.log(captureTwins(['m', 'm', 'n', 'n', 's', 's']));
console.log(captureTwins(['m', 'm', 'm', 'n', 's', 's']));

//Problem 9: function that takes an array of boolean values and returns true if any value is true
function testBooleanLogic (arr){



}
console.log(testBooleanLogic([false, true, false, false]));
console.log(testBooleanLogic([false, false, false]));


//Problem 10: function that takes an array of string and returns a new array consisting of the unique values
function getUniqueValues (strArr){



}
console.log(getUniqueValues(['m', 'n', 'm', 'r', 'r', 's']));
console.log(getUniqueValues(['michael', 'ben', 'kerry', 'ben']));


//testing
module.exports = {
  getStudentName: getStudentName,
  getTotalLetters: getTotalLetters,
  createObject: createObject,
  getNegativeIndex: getNegativeIndex
};



