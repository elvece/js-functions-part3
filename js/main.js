//test example
function test(str) {
  return "test" + str;
}
console.log(test("ing"));

//problem 1: function that takes a single object as an argument and returns the value of the name property/key
var person = {name: 'Michael', age: 27 };

function getStudentName(arr){
  return arr.name;
}
console.log(getStudentName(person));

//problem 2: function that takes an array of strings as an argument and returns the total number of letters in all strings
var stringArray = ['javascript', 'is', 'not', 'python'];

function getTotalLetters(stringArr){
  return stringArr.join("").length;
}
console.log(getTotalLetters(stringArray));

//problem 3: function that takes two arguments and returns a new object with a key of the first argument and the value of the second argument
function createObject(key, value){
  var obj = {};
  obj[key] = value;//key in brackets because passing in a string, .key passes in the actual word key rather than using the argument
  return obj;
}
console.log(createObject('City', 'Boulder'));

//problem 4: function that takes an array and a negative number as arguments and returns the value from the array at the given negative index
var letterArray = ['a', 'b', 'c', 'd', 'e'];

function getNegativeIndex(arr, index){
  //starts at last item in array and goes back the number of index argument
  //last index -1

  return
}
console.log(getNegativeIndex(letterArray, -3));
