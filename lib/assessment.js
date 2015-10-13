'use strict';

// All of the callbacks in questions 3 through 5 should
// be called with the current element in the array,
// its index, and the array itself
// e.g. callback(currentValue, index, array)

// Question 1
// Write a callback for reduce that selects
// the minimum value in the array
var min = function min(array) {
  var minimum = array.reduce(function(a,b){
    return b < a ? b : a;
  });
  return minimum;
};

// Question 2
// Write a callback for reduce that produces
// the sum of the values in the array
var sum = function sum(array) {
  var total = array.reduce(function(a,b) {
    return a + b;
  });
  return total;
};

// Question 3
// Write a function that returns true
// if invoking the callback for any element
// in the array returns a truthy value
var any = function any(array, callback, thisArg) {
  result = true;
  array.forEach(function(a){
    result = result && callback(a);
  });
  return result;
};

// Question 4
// Write a function that returns a new array
// made up of the array elements for which invoking
// the callback returns a truthy value
var select = function select(array, callback, thisArg) {
  return array.filter(callback);
};

// Question 5
// Write a function that returns the first element
// for which invoking the callback returns a truthy value
var find = function find(array, callback, thisArg) {
  return array.filter(callback)[0];
};

// Used by testing
module.exports = {
  min: min,
  sum: sum,
  any: any,
  select: select,
  find: find
};
