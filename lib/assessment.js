'use strict';

// All of the callbacks in questions 3 through 5 should
// be called with the current element in the array,
// its index, and the array itself
// e.g. callback(currentValue, index, array)

// Question 1
// Write a callback for reduce that selects
// the minimum value in the array
var min = function min(previousValue, currentValue, index, array) {
  return currentValue > previousValue ? currentValue : previousValue;
};

// Question 2
// Write a callback for reduce that produces
// the sum of the values in the array
var sum = function sum(previousValue, currentValue, index, array) {
  return previousValue + currentValue;
};

// Question 3
// Write a function that returns true
// if invoking the callback for any element
// in the array returns a truthy value

// this seems vague, and I don't exactly know
// what's being asked here, so I'm making a function
// that uses a for loop to set every item in the array
// to be 1
var any = function any(array, callback, thisArg) {
  for (var i = 0; i < array; i++) {
    callback(array[i], i, array) = 1;
  }
  return true;
};

// Question 4
// Write a function that returns a new array
// made up of the array elements for which invoking
// the callback returns a truthy value

// Stil not clear. So, this is what I've got.
var select = function select(array, callback, thisArg) {
  var newArray = [];
  for (var i = 0; i < array; i++) {
    newArray[i] = array[i]
  }
  return true;
};

// Question 5
// Write a function that returns the first element
// for which invoking the callback returns a truthy value

// again, not clear what's wanted here but it looks like
// using the properties of the .forEach method
var find = function find(array, callback, thisArg) {
  var result = 0;
  if (array[i]!= null) {
    return array[i];
};

// Used by testing
module.exports = {
  min: min,
  sum: sum,
  any: any,
  select: select,
  find: find
};
