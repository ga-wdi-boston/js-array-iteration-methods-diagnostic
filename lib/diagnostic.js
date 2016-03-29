'use strict';

// Question 1
// Describe in your own words what a `callback`
// is in relation to array methods

//A callback is the function that is passed to an array method that is invoked
//and operates on the array or tests for something in the array.

// Question 2
// Describe in your own words the differences between a `for` loop
// and the `forEach` array method
// a for loop lets you loop across an array and can be broken out of at any time; you
// can modify the array with this structure
//
// forEach executes a callback function for each element in an array and can not be
// broken out of, does not modify the array.

// Question 3
// Implement the `reduce` array method, using arrow function
// syntax, to return the total sum of all values in the original array

const reduce = function reduce(array, callback) {
  return callback(array);
};

let test = arr.reduce((a, b) => a + b);

// Question 4
// Write a function that returns true
// if invoking the callback for any element
// in the array returns a truthy value

//this works in node if I test it with the test values, but grunt test fails.
const any = function any(array, callback) {
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      return true;
    }
  }
  return false;
};

// Question 5
// Write a function that returns a new array
// made up of the array elements for which invoking
// the callback returns a truthy value
const select = function select(array, callback) {
  let holder = [];
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      holder.push(array[i]);
    }
  }
  return holder;
};

// Question 6
// Implement the `every` function to test if all elements
// in an array are a `typeof` number
const every = function(array, callback)  {
  for (let i = 0; i < array.length; i++) {
    if (!callback(array[i])) {
      return false;
    }
  }
  return true;
};

//didn't include the callback, but just pass it something like (n) => typeof n === 'number'
