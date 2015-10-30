'use strict';

// All of the callbacks in questions 3 through 5 should
// be called with the current element in the array,
// its index, and the array itself
// e.g. callback(currentValue, index, array)

// Question 1
// Write a callback for reduce that selects
// the minimum value in the array

// iterate over the array, use ternary operator to compare currentValue
// to previousValue and assign the min to whichever satisfies
// the condition
var min = function min(previousValue, currentValue, index, array) {
  // set the intial result
  var result = previousValue;
  for (var i = 0; i < array.length; i++) {
    // set the updated result
    result = currentValue < previousValue ? currentValue : previousValue;
  }
  // return the value or it won't pass grunt test
  return result;
};

// [5, 3, 2]

// this is the longhand way that passes the grunt test
// var min = function min(previousValue, currentValue, index, array) {
//   var result = previousValue;
//   for (var i = 0; i < array.length; i++) {
//     if (currentValue < previousValue) {
//       result = currentValue;
//     } else {
//       // this stores the former currentValue
//       result = previousValue;
//     }
//   return result;
//   }
// };

// Question 2
// Write a callback for reduce that produces
// the sum of the values in the array

// cool! Looks like we don't need to pass index and array
// into the callback function?
var sum = function sum(previousValue, currentValue) {
  return previousValue + currentValue;
};

// Question 3
// Write a function that returns true
// if invoking the callback for any element
// in the array returns a truthy value
var any = function any(array, callback, thisArg) {
  // set initial result value
  var result = false;
  array.forEach(function(currentValue, index, array){
    // this means if the result of invoking callback
    // returns a truthy value...
    if (callback(currentValue)) {
      result = true;
    }
  });
  return result;
};

// Question 4
// Write a function that returns a new array
// made up of the array elements for which invoking
// the callback returns a truthy value

// this means when iterating over the array, if the
// callback(currentValue) is truthy, add that currentValue
// to the new array
var select = function select(array, callback, thisArg) {
  var newArray = [];
  array.forEach(function(currentValue, index, array) {
    if (callback(currentValue)) {
      newArray.push(currentValue);
    }
  });
  return newArray;
};

// Question 5
// Write a function that returns the first element
// for which invoking the callback returns a truthy value

// so.. write a function and put in a callback in that function
// and if the callback returns true return that element
// return the first element that returns true sounds like
// we're iterating over an array?

// In other words, write a function that iterates over an array
// the function has a callback.
// if callback() returns something truthy, immediately return that
// element. That element is an array index value.
var find = function find(array, callback, thisArg) {
  var result = null;
  array.forEach(function(currentValue, index, array){
    if (callback(currentValue, index, array)) {
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
