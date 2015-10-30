'use strict';

// All of the callbacks in questions 3 through 5 should
// be called with the current element in the array,
// its index, and the array itself
// e.g. callback(currentValue, index, array)

// Question 1
// Write a callback for reduce that selects
// the minimum value in the array
var min = function min(previousValue, currentValue) {
  return previousValue < currentValue? previousValue : currentValue;
};


// Question 2
// Write a callback for reduce that produces
// the sum of the values in the array
var sum = function sum(previousValue, currentValue) {
  return previousValue += currentValue;
};


// Question 3
// Write a function that returns true
// if invoking the callback for any element
// in the array returns a truthy value
var any = function any(array, callback, thisArg) {
  var result = false;
  array.forEach(function(currentValue, index, array){
    result = result || callback(currentValue, index, array);
  });
  return result;
};


// Question 4
// Write a function that returns a new array
// made up of the array elements for which invoking
// the callback returns a truthy value
var select = function select(array, callback, thisArg) {
  var newArray = [];
  array.forEach(function(currentValue, index, array){
    if (callback(currentValue, index, array)) {
      newArray.push(currentValue);
    }
  });
  return newArray;
};

// Question 5
// Write a function that returns the first element
// for which invoking the callback returns a truthy value

//var find = function find(array, callback, thisArg) {
//  if (!array.every(callback) === false) {
//    return array[i];
//  }
//};
var find = function find(array, callback, thisArg){
  var firstTruthy;
  array.forEach(function(currentValue, index, array){
    if (!firstTruthy && callback(currentValue, index, array)){
      firstTruthy = currentValue;
    };
  });
  return firstTruthy;
};
// Used by testing
module.exports = {
  min: min,
  sum: sum,
  any: any,
  select: select,
  find: find
};
