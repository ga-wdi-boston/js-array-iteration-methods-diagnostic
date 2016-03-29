'use strict';

// Question 1
// Describe in your own words what a `callback`
// is in relation to array methods
A callback is a function that gets passed through another function as an argument.

// Question 2
// Describe in your own words the differences between a `for` loop
// and the `forEach` array method
A for loop runs through an array x amount of times and a the forEach array method runs through each individual index in an arary.

// Question 3
// Implement the `reduce` array method, using arrow function
// syntax, to return the total sum of all values in the original array

console.log(arr.reduce((a,b) => a + b));

// Question 4
// Write a function that returns true
// if invoking the callback for any element
// in the array returns a truthy value
const any = function any(array, callback) {
  let testPass = true;
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i]) === false){
      testPass = false;
      break;
    }
  }
  return testPass;
};

console.log(any(array, callback));


// Question 5
// Write a function that returns a new array
// made up of the array elements for which invoking
// the callback returns a truthy value
let arr = [1, 2, 3];

let cb = function(num){
  return num % 2 === 0;
}

let map = function(arr, cb){
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (cb(ar[i]) === false){
      newArr = false;
      break;
    }
  }
  return newArr;
};

console.log(map(arr, cb));

//shorthand

let newArr = arr.map(a => a % 2 === 0)


// Question 6
// Implement the `every` function to test if all elements
// in an array are a `typeof` number
