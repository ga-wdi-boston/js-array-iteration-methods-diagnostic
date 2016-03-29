'use strict';

// Question 1
// Describe in your own words what a `callback`
// is in relation to array methods
A callback is a function passed as a parameter to another function to be executed on the elements of the array.
// Question 2
// Describe in your own words the differences between a `for` loop
// and the `forEach` array method
forEach iterates through all elements of the array and cant be stopped or broken out of like a for loop. It also does not change the array.

// Question 3
// Implement the `reduce` array method, using arrow function
// syntax, to return the total sum of all values in the original array
arr = [1,2,3];

arr.reduce((a,b) => a + b);

// Question 4
// Write a function that returns true
// if invoking the callback for any element
// in the array returns a truthy value
const any = function any(array, callback) {
  let testPass = false;
  for(let i = 0; i < array.length; i++){
    if(callback(array[i]) === true){
      testPass = true;
    }
  }
  return testPass;
};

// Question 5
// Write a function that returns a new array
// made up of the array elements for which invoking
// the callback returns a truthy value
const select = function select(array, callback) {
  let newArr = [];
  for (let i = 0; i < array.length; i++){
    if (callback(array[i]) === true){
      newArr.push(array[i]);
    }
  }
  return newArr;
};

// Question 6
// Implement the `every` function to test if all elements
// in an array are a `typeof` number

let arr = [1,2,3];

let isNum = function(arr){
  let testPass = true;
  for (let i = 0; i < arr.length; i++){
    if ( typeof arr[i] !== 'number'){
      testPass = false;
    }
  }
  return testPass;
};

arr.every(isNum);
