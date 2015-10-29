'use strict';

// All of the callbacks in questions 3 through 5 should
// be called with the current element in the array,
// its index, and the array itself
// e.g. callback(currentValue, index, array)

// Question 1
// Write a callback for reduce that selects
// the minimum value in the array
var min = function min(memo, current) {
  if (current < memo) {
    memo = current;
  }
  return memo;
};

// Question 2
// Write a callback for reduce that produces
// the sum of the values in the array
var sum = function sum(memo, current) {
  memo = memo || 0;
  memo += current;
  return memo;
};

// Question 3
// Write a function that returns true
// if invoking the callback for any element
// in the array returns a truthy value
var any = function any(array, callback, thisArg) {
  var isTrue = false;
  // Iterate through each element in the array
  array.forEach(function(value) {
    // Test each value by passing it to the callback
    if (callback(value)) {
      // If the callback returns a truthy value,
      // switch 'isTrue' to the opposite
      isTrue = true;
    }
  })
  // Return 'isTrue'
  return isTrue;
};

// Question 4
// Write a function that returns a new array
// made up of the array elements for which invoking
// the callback returns a truthy value
var select = function select(array, callback, thisArg) {
  var filtered = [];
  // Iterate through each element in an array
  array.forEach(function(value) {
    // Test each value by passing it to the predicate
    if(callback(value)) {
      // If the predicate returns true, add it to the new array
      filtered.push(value);
    }
  });
  // Return the filtered array
  return filtered;
};

// Question 5
// Write a function that returns the first element
// for which invoking the callback returns a truthy value
var find = function find(array, callback, thisArg) {
  // Collect all truthy values in an array
  var truthy_values = select(array, callback);
  // Return the first element of the array
  return truthy_values[0];
};

// Used by testing
module.exports = {
  min: min,
  sum: sum,
  any: any,
  select: select,
  find: find
};
