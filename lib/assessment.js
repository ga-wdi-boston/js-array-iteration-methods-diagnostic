'use strict';

// All of the callbacks in questions 3 through 5 should
// be called with the current element in the array,
// its index, and the array itself
// e.g. callback(currentValue, index, array)

// Question 1
// Write a callback for reduce that selects
// the minimum value in the array

var min = function min(previousValue, currentValue, index, array) {
  return previousValue < currentValue ? previousValue : currentValue;
};

console.log(reduce(numbers, min));
console.log(numbers.reduce(function (previousValue, currentValue) {
  return previousValue < currentValue ? previousValue : currentValue;
}));


};

// I used Antony's Max Example of code and switched the operators.
// I do not think I could logic out the whole thing as concisely as this.
// I cannot write this code from scratch myself but I can read this and edit it



// Question 2
// Write a callback for reduce that produces
// the sum of the values in the array

var sum = function sum() {

var sum = function sum(previousValue, currentValue, index, array) {
  return previousValue + currentValue;
};

var numbers = [13, 26, 32, 5];

console.log(reduce(numbers, sum));
console.log(numbers.reduce(function (previousValue, currentValue) {
  return previousValue + currentValue;
}));


};

// Same case for solving here as above-
// I heavily relied on Antony's code and can readi it pretty well
// I Feel rushed so maybe I am not catching all of the edits but
// I am concerned that I cannot construct this code myself,
//I hoep i chose the correct code to model from, even.
// I do understand how javascript is fucntioning though, most of the time.



// Question 3
// Write a function that returns true
// if invoking the callback for any element
// in the array returns a truthy value

  var any = function any(array, callback, thisArg) {
  // callback(currentValue, index, array)

  //check for true first
  var result = true;
  array.forEach(function(currentValue, index, array) {
    // if callback ever returns false, result will be set
    // to false amd the callback will not be called in any
    // subsequent iterations.
    result = result && callback(currentValue, index, array);
  });

  return result;
};


// I am not sure about how to read this one now that I see it again.
// I think the quick way of writing the "if true" statements are confusing me
// I would like help to write it the way I would do it, or review the statements again
// I am not sure I got this one correct, even copying the code.

// Question 4
// Write a function that returns a new array
// made up of the array elements for which invoking
// the callback returns a truthy value
var select = function select(array, callback, thisArg) {

};

// Question 5
// Write a function that returns the first element
// for which invoking the callback returns a truthy value
var find = function find(array, callback, thisArg) {

};

// Used by testing
module.exports = {
  min: min,
  sum: sum,
  any: any,
  select: select,
  find: find
};
