'use strict';

// Question 1
// Describe in your own words what a `callback`
// is in relation to array methods
let q1 = 'A callback is a function passed as an argument to a function, so that it can be called within that function. In terms of array methods, often the callback function is called on each element of the array.';

// Question 2
// Describe in your own words the differences between a `for` loop
// and the `forEach` array method
let q2 = 'A for loop is a versatile structure for repeating a section of code multiple times. forEach is an Array method that performs a function on each element in an array.';

// Question 3
// Implement the `reduce` array method, using arrow function
// syntax, to return the total sum of all values in the original array
let q3 = [1,2,3,4].reduce((a,b) => a + b); // 10

// Question 4
// Write a function that returns true
// if invoking the callback for any element
// in the array returns a truthy value
const any = function any(array, callback) {
  for (var i = 0; i < array.length; i++) {
    if(callback(array[i])) {return true;}
  }
  return false;
};

// Question 5
// Write a function that returns a new array
// made up of the array elements for which invoking
// the callback returns a truthy value
const select = function select(array, callback) {
  let newAry = [];
  for (var i = 0; i < array.length; i++) {
    if(callback(array[i])) {newAry.push(array[i]);}
  }
  return newAry;
};

// Question 6
// Implement the `every` function to test if all elements
// in an array are a `typeof` number
let q6a = [0,1,2,"I'm a number"].every(n => typeof n === 'number'); //false
let q6b = [0,1,2,NaN].every(n => typeof n === 'number'); //true
