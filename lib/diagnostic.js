'use strict';

// All of the callbacks in questions 3 through 5 should
// be called with the current element in the array,
// its index, and the array itself
// e.g. callback(currentValue, index, array)

// Question 1
// Write a callback for reduce that selects
// the minimum value in the array
const min = function min(currentValue, index, array) {
  for (let i = 0; i < array.length; i++) {
    let callback = callback(array[i], i, array);
  }

};


var reduce = function reduce(arrayIn, callback, initialValue) {
  // callback(previousValue, currentValue, index, array)
  let array = arrayIn.slice();
  let prev = initialValue !== undefined ? initialValue : array.shift();
  array.forEach(function(curr, i, a) {
    prev = callback(prev, curr);
  });

  return prev;
};



// Question 2
// Write a callback for reduce that produces
// the sum of the values in the array
const sum = function sum() {
  let sum
};

// Question 3
// Write a function that returns true
// if invoking the callback for any element
// in the array returns a truthy value
const any = function any(array, callback) {

};

// Question 4
// Write a function that returns a new array
// made up of the array elements for which invoking
// the callback returns a truthy value
const select = function select(array, callback) {

};

// Question 5
// Write a function that returns the first element
// for which invoking the callback returns a truthy value
const first = function first(array, callback) {

};

// Used by testing
module.exports = {
  min,
  sum,
  any,
  select,
  first,
};
