'use strict';

// All of the callbacks in questions 3 through 5 should
// be called with the current element in the array,
// its index, and the array itself
// e.g. callback(currentValue, index, array)

// Question 1
// Write a callback for reduce that selects
// the minimum value in the array
var min = function min(previousValue, currentValue, index, array) {
  var minValue;
  if (currentValue < minValue){
    minValue = currentValue;
  }
  return minValue;
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
var any = function any(array, callback, thisArg) {
  callback(currentValue, index, array)
  var result = false;
  array.any(function(currentValue, index, array){
    result = result || callback(currentValue, index, array);
  });
  return result;
};


// var every = function every(array, callback, thisArg) {
//   // callback(currentValue, index, array)
//   var result = true;
//   array.forEach(function(currentValue, index, array) {
//     // if callback ever returns false, result will be set
//     // to false amd the callback will not be called in any
//     // subsequent iterations.
//     result = result && callback(currentValue, index, array);
//   });



/// Question 4
// Write a function that returns a new array
// made up of the array elements for which invoking
// the callback returns a truthy value
var select = function select(array, callback, thisArg) {
  var result = [];
  array.forEach(function(currentValue, index, array) {
    result = result && callback(currentValue, index, array);
  });

  return result;
};
};

// Question 5
// Write a function that returns the first element
// for which invoking the callback returns a truthy value
var find = function find(array, callback, thisArg) {
 callback(currentValue, index, array)
  var result = false;
  array.any(function(currentValue, index, array){
    result = result || callback(currentValue, index, array);
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
