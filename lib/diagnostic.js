'use strict';

// All of the callbacks in questions 3 through 5 should
// be called with the current element in the array,
// its index, and the array itself
// e.g. callback(currentValue, index, array)

// Question 1
// Write a callback for reduce that selects
// the minimum value in the array
const min = function min(prev, curr) {
  if (curr < prev) {
    return curr;
  }
};

// Question 2
// Write a callback for reduce that produces
// the sum of the values in the array
const sum = function sum(prev, curr) {
    return prev + curr;
  };

// Question 3
// Write a function that returns true
// if invoking the callback for any element
// in the array returns a truthy value
const any = function any(array, callback) {
  let result = false;
     for (let i = 0; i < array.length; i++) {
       if (!callback(array[i])) {
         result = true;
       }
     }
     return result;
   };

// Question 4
// Write a function that returns a new array
// made up of the array elements for which invoking
// the callback returns a truthy value
const select = function select(array, callback) {
    let result = false;
    for (let i = 0; i < array.length; i++) {
      if (callback(array[i]) === true) {
        let result = [];
      result.push(callback(array[i]));
    }
     }
     return result;
   };

// Question 5
// Write a function that returns the first element
// for which invoking the callback returns a truthy value
const first = function first(array, callback) {
  let result = false;
     for (let i = 0; i < array.length; i++) {
       if (callback(array[i]) === true) {
         result = array[i];
         return result;
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
