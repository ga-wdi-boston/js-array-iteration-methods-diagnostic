'use strict';

// Question 1
// Describe in your own words what a `callback`
// is in relation to array methods

// I think a callback is essentially calling calling back a
// function for use in another function. So array methods are technically built in
// functions, and a callback in that contect

// Question 2
// Describe in your own words the differences between a `for` loop
// and the `forEach` array method
//
// a for loop iterates x action over x thing x many times. It's basically
// like saying "for (this thing i=0), as long as this condition, increment/decrement
// etc by this much. those are the instructions for the for loop and then the
// statements in the block it contains specify what to do within the conditions of
// that for loop. like printing the changes with console.log, or printing the result.
//
// the for each method applys the callback entered in it's parameters to each item
// in the array. so if you wanted to apply the callback of a plusOne function (that
// is aptly named) to an array of [1,2,3,4,5] it would go through each of those
// integers and add one to them through the plusOne function you called back to,
// using the forEach method you're calling it through.

// Question 3
// Implement the `reduce` array method, using arrow function
// syntax, to return the total sum of all values in the original array
var nums = [0, 1, 2 , 3, 4,];
var sum = array.reduce(num, sum) => num + sum);
console.log(sum);


// Question 4
// Write a function that returns true
// if invoking the callback for any element
// in the array returns a truthy value
const any = function any(array, callback) {

};

// Question 5
// Write a function that returns a new array
// made up of the array elements for which invoking
// the callback returns a truthy value
const select = function select(array, callback) {

};

// Question 6
// Implement the `every` function to test if all elements
// in an array are a `typeof` number
