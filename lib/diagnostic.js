'use strict';

// Question 1
// Describe in your own words what a `callback`
// is in relation to array methods

A callback is a method that is passed into another function,
so that the it can be called and used within the function is passed into.
Array methods iterate over and array and utilize callbacks on the indecies.

// Question 2
// Describe in your own words the differences between a `for` loop
// and the `forEach` array method

Once a foreach is started it cannot be broken out of until it returns something.
Also, it doesnt not affect the original array.


// Question 3
// Implement the `reduce` array method, using arrow function
// syntax, to return the total sum of all values in the original array

Say we have some array with items in it:

let arr = [1,2,3,4,5,7,8,6,56,7,5,5,7,8];

we would use reduce() like this:

arr.reduce((a, b) => a + b);


// Question 4
// Write a function that returns true
// if invoking the callback for any element
// in the array returns a truthy value
const any = function any(array, callback) {
  let test = false;
  for (let i = 0; i < array.length; i++) {
    if(callback(array[i])){
      test = true;
      return test;
    }
  }
  return test;
};


// Question 5
// Write a function that returns a new array
// made up of the array elements for which invoking
// the callback returns a truthy value
const select = function select(array, callback) {
  let truArray = [];
  for (let i = 0; i < array.length; i++) {
    if(callback(array[i])){
      truArray.push(array[i]);
    }
  }
  return truArray;

};

// Question 6
// Implement the `every` function to test if all elements
// in an array are a `typeof` number
Say we have some array with items in it:

let arr = [1,2,3,4,5,7,8,6,56,7,5,5,7,8];

we would use every() like this:

arr.every( i => typeof i === 'number');
