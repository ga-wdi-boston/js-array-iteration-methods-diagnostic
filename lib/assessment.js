'use strict';

// All of the callbacks in questions 3 through 5 should
// be called with the current element in the array,
// its index, and the array itself
// e.g. callback(currentValue, index, array)
var reduce = function reduce(array, callback, initialValue) {
  var previousValue;
  if (initialValue !== undefined) {
    previousValue = initialValue;
  } else {
    array = array.slice();
    previousValue = array.shift();
  }

  array.forEach(function(currentValue, index, array) {
    previousValue = callback(previousValue, currentValue, index, array);
  });

  return previousValue;
};

var numbers = [3, 42, 5, 74, 11];

// Question 1
// Write a callback for reduce that selects
// the minimum value in the array
var min = function min(previousValue, currentValue, index, array) {
  return previousValue < currentValue ? previousValue : currentValue;
};

console.log(reduce(numbers, min));

// Question 2
// Write a callback for reduce that produces
// the sum of the values in the array
var sum = function sum(previousValue, currentValue, index, array) {
  return previousValue + currentValue;
};

console.log(reduce(numbers, sum));

// Question 3
// Write a function that returns true
// if invoking the callback for any element
// in the array returns a truthy value
var any = function any(array, callback, thisArg) {
  var result = false;
  array.forEach(function(currentValue, index, array) {
    result = result || callback(currentValue, index, array);
  });

  return result;
};

var numbers = [0, 8, 24, 39];

var q3 = function(currentValue) {
  return (currentValue % 2) === 0;
};

// Question 4
// Write a function that returns a new array
// made up of the array elements for which invoking
// the callback returns a truthy value
var select = function select(array, callback, thisArg) {
  var result = [];
  array.forEach(function(currentValue, index, array) {
    if (callback(currentValue, index, array)) {
      result.push(currentValue);
    }
  });

  return result;
};

// Question 5
// Write a function that returns the first element
// for which invoking the callback returns a truthy value
var find = function find(array, callback, thisArg) {
  var result;
  array.forEach(function(currentValue, index, array) {
    if (!result && callback(currentValue, index, array)) {
      result = currentValue;
    }
  });

  return result;
};

// Used by testing
module.exports = {
  min: min,
  sum: sum,
  any: any,
  select: select,
  find: find
};
