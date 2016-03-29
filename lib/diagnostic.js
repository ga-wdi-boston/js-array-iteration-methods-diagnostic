'use strict';

// Question 1
// Describe in your own words what a `callback`
// is in relation to array methods

A callback is a function that gets passed into a function as an argument. It tells you what function to invoke.



// Question 2
// Describe in your own words the differences between a `for` loop
// and the `forEach` array method

A for loop iterates through an array but can be limited using a certain set of parameters. forEach will iterate through every element in an array until it completes the array.


// Question 3
// Implement the `reduce` array method, using arrow function
// syntax, to return the total sum of all values in the original array

array.reduce((a,b) => a + b);

// Question 4
// Write a function that returns true
// if invoking the callback for any element
// in the array returns a truthy value
const any = function any(array, callback) {
let testPass = true;
for (let i = 0; i < array.length; i++) {
  if (callback(array[i]) === true){
    testPass = true;
    break;
  }
}
return testPass;
};


// Question 5
// Write a function that returns a new array
// made up of the array elements for which invoking
// the callback returns a truthy value

// creating a new array of only the values that return true?
const select = function select(array, callback) {
  let newArray = [];
  for (var i = 0; i < array.length; i++) {
    if (callback(array[i]) === true){
      newArray.push(array[i]);
    }
    // what is my else??
  }
return newArray;
};

// Question 6
// Implement the `every` function to test if all elements
// in an array are a `typeof` number

let every = function(array){
  let allNumbers = true;
for (let i = 0; i < array.length; i++) {
  if (typeof array[i] === 'number'){
    allNumbers = true;
    break;
  }
}
return allNumbers;
};
