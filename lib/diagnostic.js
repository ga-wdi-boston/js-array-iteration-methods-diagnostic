'use strict';
var array = [-1, -2, -3, -4, -5];
// Question 1
// Describe in your own words what a `callback`
// is in relation to array methods
  // A callback function is a function that is used as an argument in another function
  //  - in array methods, they are largely used as predicate functions to determine
  //  what elements of the array the array method will apply to.
// Question 2
// Describe in your own words the differences between a `for` loop
// and the `forEach` array method
  // A for loop iterates over each element of anything, including arrays, and can be
  // broken out of with a return or break statment.  A forEach loop only applies to
  // arrays, and cannot be broken out of.

// Question 3
// Implement the `reduce` array method, using arrow function
// syntax, to return the total sum of all values in the original array
array.reduce((a, b) => a += b);

// Question 4
// Write a function that returns true
// if invoking the callback for any element
// in the array returns a truthy value
const any = function any(array, callback) {
  let result = array.some(callback());
  return result;
};

// Question 5
// Write a function that returns a new array
// made up of the array elements for which invoking
// the callback returns a truthy value
const select = function select(array, callback) {
  let newArray = [];
  newArray = array.map(callback());
  return newArray;
};

// Question 6
// Implement the `every` function to test if all elements
// in an array are a `typeof` number
array.every(i => typeof i === 'number');
