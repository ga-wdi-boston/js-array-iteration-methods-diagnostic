'use strict';

// Question 1
// Describe in your own words what a `callback`
// is in relation to array methods

A callback function affects what is going in another function or array method
by telling you what to do with every method that you're iterating over.

// Question 2
// Describe in your own words the differences between a `for` loop
// and the `forEach` array method

A 'for' loop iterates over an array whereas the 'forEach' array method performs
a callback function on an array.

// Question 3
// Implement the `reduce` array method, using arrow function
// syntax, to return the total sum of all values in the original array

let cb = function(array){
  let result = 0;
  for (let i = 0; i < array.length; i++) {
    result += array[i];
  }
  return result;
};

let reduce = function(array, callback) {
  return callback(array);
};

// Question 4
// Write a function that returns true
// if invoking the callback for any element
// in the array returns a truthy value

const any = function any(array, callback) {
  for (let i = 0; i < array.length; i++) {
  }
};

// Question 5
// Write a function that returns a new array
// made up of the array elements for which invoking
// the callback returns a truthy value
const select = function select(array, callback) {

};

// Question 6
// Implement the `every` function to test if all elements
// in an array are a `typeof` number
