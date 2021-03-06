// var _=require('underscore');

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
  obj[key] = value;
  //key in brackets because passing in a string, .key passes in the actual word key rather than using the argument
  return obj;
}
console.log(createObject('City', 'Boulder'));



//Problem 4: function that takes an array and a negative number as arguments and returns the value from the array at the given negative index
var letterArray = ['a', 'b', 'c', 'd', 'e'];

function getNegativeIndex(arr, index){
  //c is index 2 normally, to get -3 to 2...add 5...which is length of array
  return arr[index + arr.length];
}
console.log(getNegativeIndex(letterArray, -3));



//Problem 5: function that takes a string and a single character (string or integer) as arguments and returns the string with the characters removed
function removeChar (str, char){
  var newStr = str.split(char).join("");
  return newStr;

  // str.replace(new RegExp(char, "gi" ), "" );
  // return str;
}
console.log(removeChar('javascript', 'a'));
console.log(removeChar('javascript', '1'));
console.log(removeChar('12345', '2'));



//Problem 6: function that takes an object as an argument and returns each key-value pair in the following format: key is value
var ages = {john: 10, jerry: 11, jenny: 12 };
//refactor
function outputObject(object){
  var arr = [];
  for (var key in object){
    arr.push(key + ' is ' + ages[key]);
  }
  return arr.join(", ");
}
console.log(outputObject(ages));

//if indexOf() = -1,

//Problem 7: function that takes a string as an argument and returns an array of all the vowels in the string, not including duplicates.
function getVowels(str){
  var arr = [];
  var vowels = str.replace(/[^aeiou]/gi, "").split("");
    for ( i = 0; i < vowels.length; i++ ) {
      //if the index of the iterated value of vowels is less than 0, aka if it is -1, thus not in the array, then push it to the array
      if (arr.indexOf(vowels[i]) < 0) {
        arr.push(vowels[i]);
      }
    }
    return arr;
}
console.log(getVowels('javascripting'));



//Problem 8: function that takes an array as an argument and returns true if every adjacent pair of items in the array is the same, otherwise returns false
function captureTwins (arr){
  var chunks = [];
  var twin = [];
  var booleanArr = [];
  for (var i=0; i<arr.length; i+=2){
    chunks.push(arr.slice(i,i+2));
  }
  for (var j = 0; j < chunks.length; j++) {
    if (chunks[j][0] === chunks[j][1]){
       booleanArr.push(true);
    }
    else{
      booleanArr.push(false);
    }
  }
  function isTrue(element, index, array){
    return element === true;
  }
  return booleanArr.every(isTrue);
}

console.log(captureTwins(['m', 'm', 'n', 'n', 's', 's']));
console.log(captureTwins(['m', 'm', 'm', 'n', 's', 's']));
//_.pluck, or _.find


//Problem 9: function that takes an array of boolean values and returns true if any value is true
function testBooleanLogic (arr){
  for (var i = 0; i < arr.length; i++) {
    if(arr[i] === true){
      return true;
    }
  }
  return false;
}
console.log(testBooleanLogic([false, true, false, false]));
console.log(testBooleanLogic([false, false, false]));



//Problem 10: function that takes an array of string and returns a new array consisting of the unique values
function getUniqueValues (strArr){
  //can also use _.uniq(strArr) but underscore not working with jasmine tests currently
  // return _.uniq(strArr);

  var newArr = [];
  for (var i = 0; i < strArr.length; i++) {
    if (newArr.indexOf(strArr[i]) === -1 && strArr[i] !== '')
      // setting the index to -1 means its not in the array
      newArr.push(strArr[i]);
  }
  return newArr;
}
console.log(getUniqueValues(['m', 'n', 'm', 'r', 'r', 's']));
console.log(getUniqueValues(['michael', 'ben', 'kerry', 'ben']));



//testing
module.exports = {
  getStudentName: getStudentName,
  getTotalLetters: getTotalLetters,
  createObject: createObject,
  getNegativeIndex: getNegativeIndex,
  removeChar: removeChar,
  outputObject: outputObject,
  getVowels: getVowels,
  captureTwins: captureTwins,
  testBooleanLogic: testBooleanLogic,
  getUniqueValues: getUniqueValues
};



