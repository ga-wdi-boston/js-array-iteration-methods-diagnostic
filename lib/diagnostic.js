'use strict';

// Question 1
// Describe in your own words what a `callback`
// is in relation to array methods

//A 'callback' is a function that gets passed inside another function as an argument.

// Qu estion 2
// Describe in your own words the differences between a `for` loop
// and the `forEach` array method

// Both a 'for' loop and the 'forEach' array method itterate through arrays,
// however, forEach cannot be broken out of and does not change the elements of
// the original array.

// Question 3
// Implement the `reduce` array method, using arrow function
// syntax, to return the total sum of all values in the original array
let arr = [1,2,3,4];
arr.reduce((a, b) => a + b);

// Question 4
// Write a function that returns true
// if invoking the callback for any element
// in the array returns a truthy value
const any = function any(array, callback) {
  let result = false;
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i]) === true) {
      result = true;
      break;
    }
  }
  return result;
};

// Question 5
// Write a function that returns a new array
// made up of the array elements for which invoking
// the callback returns a truthy value
const select = function select(array, callback) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i]) === true) {
      result.push(array[i])
    }
  }
  return result;
};

// Question 6
// Implement the `every` function to test if all elements
// in an array are a `typeof` number

array.every(a => typeof(a) === 'number');
