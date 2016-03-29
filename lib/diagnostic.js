'use strict';

// Question 1
// Describe in your own words what a `callback`
// is in relation to array methods
A call back function is a function that is invoked during the operation of another function/method.
So, an array method could use a callback function to return a value to be used in the method.


// Question 2
// Describe in your own words the differences between a `for` loop
// and the `forEach` array method
A for loop can be exited, and it can make changes to the original array elements.
The forEach array method only returns a new array without altering the original. Also,
once started, it can not be exited until completed.

// Question 3
// Implement the `reduce` array method, using arrow function
// syntax, to return the total sum of all values in the original array
let arr = [1, 2, 3, 4];

arr.reduce((a, b) => a + b);

// Question 4
// Write a function that returns true
// if invoking the callback for any element
// in the array returns a truthy value

let arr = [1, 2, 3, 4];

arr.some(a => a > 0);

// Question 5
// Write a function that returns a new array
// made up of the array elements for which invoking
// the callback returns a truthy value
const select = function select(array, callback) {
  let newArray = [];
  for ( let i = 0; i < array.length; i++){
    if(callback(array[i])){
      newArray[i] = array[i];
    }
  }return newArray;
};

// Question 6
// Implement the `every` function to test if all elements
// in an array are a `typeof` number

arr.every(a => typeof a === 'number');
