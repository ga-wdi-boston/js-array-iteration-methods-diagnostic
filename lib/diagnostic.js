'use strict';

// All of the callbacks in questions 3 through 5 should
// be called with the current element in the array,
// its index, and the array itself
// e.g. callback(currentValue, index, array)

// Question 1
// Write a callback for reduce that selects
// the minimum value in the array

// it took me awhile to understand the goal of these questions. we spent all day
// learning about the 'reduce' function, and these questions deliberately
// avoid using it. that seemed really odd to me.
const min = function min(previousValue, currentValue) {
  return previousValue < currentValue ? previousValue : currentValue;
};

// Question 2
// Write a callback for reduce that produces
// the sum of the values in the array
const sum = function sum(previousValue, currentValue) {
  return previousValue + currentValue;
};

// Question 3
// Write a function that returns true
// if invoking the callback for any element
// in the array returns a truthy value
const any = function any(array, callback) {
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i], i, array)) {
      return true;
    }

    return false;
  }
};

// Question 4
// Write a function that returns a new array
// made up of the array elements for which invoking
// the callback returns a truthy value
const select = function select(array, callback) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i], i, array)) {
      newArray.push(array[i]);
    }
  }

  return newArray;
};

// Question 5
// Write a function that returns the first element
// for which invoking the callback returns a truthy value
const first = function first(array, callback) {
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i], i, array)) {
      return array[i];
    }
  }
};

// Used by testing
module.exports = {
  min,
  sum,
  any,
  select,
  first,
};
