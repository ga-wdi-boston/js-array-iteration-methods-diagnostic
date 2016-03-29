'use strict';

// Question 1
// Describe in your own words what a `callback`
// is in relation to array methods
The callback is a function that essentially goes inside another function in a way.
It is passed to the larger/outside function as a parameter.  This way, when you call
the larger function, the callback will be called as well.  When working with array methods
and callbacks, the array is often passed into the callback.

// Question 2
// Describe in your own words the differences between a `for` loop
// and the `forEach` array method
A 'for' loop will go until you give it a boundary to stop at. The 'forEach' array
method will move through the entire array.


// Question 3
// Implement the `reduce` array method, using arrow function
// syntax, to return the total sum of all values in the original array
let arr = [3,5,6,89];

arr.reduce((a,b)=> a+b);


// Question 4
// Write a function that returns true
// if invoking the callback for any element
// in the array returns a truthy value

let testArray = [8,7];

let testPass = testArray.every(a => a % 4 === 0);
console.log(testPass);

// Question 5
// Write a function that returns a new array
// made up of the array elements for which invoking
// the callback returns a truthy value

let testArray = [4,7,82,64,24,100];

let testPass = testArray.filter(a => a % 4 === 0);
console.log(testPass);


// Question 6
// Implement the `every` function to test if all elements
// in an array are a `typeof` number


let testPass = testArray.every(a => typeof a === number);
console.log(testPass;)
