'use strict';

// All of the callbacks in questions 3 through 5 should
// be called with the current element in the array,
// its index, and the array itself
// e.g. callback(currentValue, index, array)

// Question 1
// Write a callback for reduce that selects
// the minimum value in the array
const min = function min() {
  let answer = arguments[0];
  for (let i = 1; i < arguments.length; i++) {
    if (answer > arguments[i]) {
      answer = arguments[i];
    }
  }

  return answer;
};

// Question 2
// Write a callback for reduce that produces
// the sum of the values in the array
const sum = function sum() {
  let answer = arguments[0];
  for (let i = 1; i < arguments.length; i++) {
    answer += arguments[i];
  }

  return answer;
};

// Question 3
// Write a function that returns true
// if invoking the callback for any element
// in the array returns a truthy value
const any = function any(array, callback) {
  for (let i =0; i < array.length; i++) {
    if (!callback(array[i], i, array)) {
      return false;
    }
  }

  return true;
};

// Question 4
// Write a function that returns a new array
// made up of the array elements for which invoking
// the callback returns a truthy value
const select = function select(array, callback) {
  let newArray = new Array();
  for (let i =0; i < array.length; i++) {
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
  for (let i =0; i < array.length; i++) {
    if (callback(array[i], i, array)) {
      return array[i];
    }
  }

  return false;
};

// Used by testing
module.exports = {
  min,
  sum,
  any,
  select,
  first,
};
