'use strict';

// All of the callbacks in questions 3 through 5 should
// be called with the current element in the array,
// its index, and the array itself
// e.g. callback(currentValue, index, array)

// Question 1
// Write a callback for reduce that selects
// the minimum value in the array
var min = function min(lastResult, thisNum) {
  if (!lastResult) {
    return thisNum;
  } else if (lastResult < thisNum) {
    return lastResult;
  } else {
    return thisNum;
  }
};

// Question 2
// Write a callback for reduce that produces
// the sum of the values in the array
var sum = function sum(lastResult, thisNum) {
  if (!lastResult) {
    lastResult = 0;
  }
  return lastResult + thisNum;
};

// Question 3
// Write a function that returns true
// if invoking the callback for any element
// in the array returns a truthy value
var any = function any(array, callback, thisArg) {
  var ifAny = false;
  //for each element in the array, use callback, if callback returns true set ifAny to true
  return ifAny;
};

// Question 4
// Write a function that returns a new array
// made up of the array elements for which invoking
// the callback returns a truthy value
var select = function select(array, callback, thisArg) {
  var output = [];
  //for each element in array, use callback, if true output.push(that element)
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
