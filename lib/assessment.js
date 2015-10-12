'use strict';

// All of the callbacks in questions 3 through 5 should
// be called with the current element in the array,
// its index, and the array itself
// e.g. callback(currentValue, index, array)

// Question 1
// Write a callback for reduce that selects
// the minimum value in the array
var min = function min(array, callback, initialValue) {

  var previousValue;

    array = array.slice();
    previousValue = array.shift();
  }

  array.forEach(function(currentValue, index, array) {
      previousValue = callback(previousValue, currentValue, index, array);
  });

  return previousValue;

};

var number = function number(previousValue, currentValue, index, array) {
  return Math.min(array);
};

// Question 2
// Write a callback for reduce that produces
// the sum of the values in the array
var sum = function sum() {



// from MDN:
// var total = [0, 1, 2, 3].reduce(function(a, b) {
//   return a + b;
// });
// // total == 6

};

// Question 3
// Write a function that returns true
// if invoking the callback for any element
// in the array returns a truthy value
var any = function any(array, callback, thisArg) {

};

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
