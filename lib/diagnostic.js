'use strict';

// Question 1
// Write a callback for reduce that selects
// the minimum value in an array
// this callback will be passed by the tests to the reduce method, e.g.
// `let minimum = array.reduce(min);`
const min = function (previous, current) {
  let minimum = previous;
  if (previous > current) {
    minimum = current;
  }
  return minimum;
};

// Question 2
// Write a callback for reduce that produces
// the sum of the values in the array
// this callback will be passed by the tests to the reduce method, e.g.
// `let total = array.reduce(sum);`
const sum = function (previous, current) {
  return previous + current;
};

// All of the callbacks in questions 3 through 5 should
// be called with the current element in the array,
// its index, and the array itself
// i.e. callback(element, index, array)

// Question 3
// Write a function that returns true
// if invoking the callback for any element
// in the array returns a truthy value
// you may use any feature of JavaScript
// other than `Array.prototype.some`
const any = function (array, callback) {
  for (let i = 0; i < array.length; i++) {
    let result = callback(array[i], i, array);
    if (result) {
      return true;
    }
  }
  return false;
};

// Question 4
// Write a function that returns a new array
// made up of the array elements for which invoking
// the callback returns a truthy value
// you may use any feature of JavaScript
// other than `Array.prototype.filter`
const select = function (array, callback) {
  let newArr = [];

  array.forEach((element, index, array) => {
    let result = callback(element, index, array);
    if (result) {
      newArr.push(element);
    }
  });

  return newArr;
};

// Question 5
// Write a function that returns the first element
// for which invoking the callback returns a truthy value
// you may use any feature of JavaScript
// other than `Array.prototype.find`
const first = function (array, callback) {
  for (let i = 0; i < array.length; i++) {
    let result = callback(array[i], i, array);
    if (result) {
      return array[i];
    }
  }
  return undefined;
};

// Used by testing
module.exports = {
  min,
  sum,
  any,
  select,
  first,
};
