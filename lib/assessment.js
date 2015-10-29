'use strict';

// All of the callbacks in questions 3 through 5 should
// be called with the current element in the array,
// its index, and the array itself
// e.g. callback(currentValue, index, array)

// Question 1
// Write a callback for reduce that selects
// the minimum value in the array

// iterate over the array and compare the array[index] value
// to the currentValue and set the currentValue to array[index]
// if the array[index] is less than the currentValue

// this one didn't work... didn't return current value
// probably because we started at 0, so the array would've never had a min lower than 0
// var min = function min(currentValue, index, array) {
//   for (var index=0; index < array.length; i++) {
//     if (array[index] < currentValue) {
//       currentValue = array[index];
//     }
//   }
//   return currentValue;
// };

// that's right, we're doing just a callback. added in previousValue as a parameter
var min = function min(previousValue, currentValue, index, array) {
  return currentValue < previousValue ? currentValue : previousValue;
};

// Question 2
// Write a callback for reduce that produces
// the sum of the values in the array

// since this is a callback for reduce, we are writing a function
// that will return a result for the sum of the previousValue and currentValue
// My question is... that sum returned is considered the accumulated
// value for the reduce function, yes? In other words, ever time
// we iterate over the callback the sum becomes the previous value
// when we do the next iteration over the next index of the array, yes?
var sum = function sum(previousValue, currentValue, array, index) {
  return previousValue + currentValue;
};

// Question 3
// Write a function that returns true
// if invoking the callback for any element
// in the array returns a truthy value

// so this is like a forEach() method?
// why is thisArg provided?
var any = function any(currentValue, index, array, callback, thisArg) {
  // set the result to false
  var result = null;
  array.forEach(function(currentValue, index, array, thisArg) {
    if (callback(currentValue, index, array) > 0) {
      return true;
    }
  });
  return result;
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



















