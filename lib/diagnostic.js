'use strict';

// Question 1
// Describe in your own words what a `callback`
// is in relation to array methods
You are accessing an array that has already been stored in a variable beforehand.
// Question 2
// Describe in your own words the differences between a `for` loop
// and the `forEach` array method
a for loop is a loop that can can be changed and can have breaks
a for each loop is fixed loop that must go through its entire sequence

// Question 3
// Implement the `reduce` array method, using arrow function
// syntax, to return the total sum of all values in the original array
let arr = [1, 2, 3, 5, 10];

arr.reduce((a, b) => a + b);

// Question 4
// Write a function that returns true
// if invoking the callback for any element
// in the array returns a truthy value
const any = function any(array, callback) {
  let testTrue = true;
    for (let i = 0; i < array.length; i++) {
      if (callback(array[i])) ==== true) {
        testTrue = false;
        break;
      }
      return testTrue;
    }
  };

// Question 5
// Write a function that returns a new array
// made up of the array elements for which invoking
// the callback returns a truthy value
const select = function select(array, callback) {
  let newArr = [];
  for (var i = 0; i < array.length; i++) {
    newArr[i] = callback(array[i]);
  }
  return newArr;
};

map(arr, cb);
};

// Question 6
// Implement the `every` function to test if all elements
// in an array are a `typeof` number

let testArray = [1, 8, 60, 122];

let testPass = testArray.every(a => typeof a === 10);
