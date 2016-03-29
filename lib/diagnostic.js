'use strict';

// Question 1
// Describe in your own words what a `callback`
// is in relation to array methods

They are basically a function that store value to be passed inside another function

// Question 2
// Describe in your own words the differences between a `for` loop
// and the `forEach` array method
for-loops iterates over something and can be broken out of whenever a condition is met.
forEach iterates over an array but will apply each condition over every element

// Question 3
// Implement the `reduce` array method, using arrow function
// syntax, to return the total sum of all values in the original array
array.reduce((a, b) => a + b);

// Question 4
// Write a function that returns true
// if invoking the callback for any element
// in the array returns a truthy value
let evenOrNot = function(num){
  return num % 2 === 0;
}

const any = function any(array, callback) {
  let testPast = true;
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i]) === false) {
      testPast = false;
      break;
    }
  }
  return testPast;
};

any(array, evenOrNot);

//every is a predicate
let every = function(array, callback) {


// Question 5
// Write a function that returns a new array
// made up of the array elements for which invoking
// the callback returns a truthy value


let cb = function (i){
  return i % 2;
}
const select = function select(array, callback) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i]) === 0) {
      newArray[i] = callback(array[i]);
    }//if
  }//for
  return newArray;
};



// Question 6
// Implement the `every` function to test if all elements
// in an array are a `typeof` number

let past = array.every(a => typeof a);
console.log(past);
