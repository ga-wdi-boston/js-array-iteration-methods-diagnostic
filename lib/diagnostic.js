'use strict';

// Question 1
// Describe in your own words what a `callback`
// is in relation to array methods
// A Callback is a function that uses the elements in the array and does something
//to those elements.

// Question 2
// Describe in your own words the differences between a `for` loop
// and the `forEach` array method
//A for loop will run through an iteration until it hits a certain condition that is set in place,
//whereas the 'forEach' method will run through all of the elements in an array.


// Question 3
// Implement the `reduce` array method, using arrow function
// syntax, to return the total sum of all values in the original array
let array = [1,2,3,4];

let result = array.reduce((a,b) => a+b);


// Question 4
// Write a function that returns true
// if invoking the callback for any element
// in the array returns a truthy value
let array3 = [1,2,3,4,5,6,7];

let cb = function(i) {
     if(i === true) {
     return i;
   }
 };


const any = function any(array, callback) {
  let testPass = true;

  for (let i = 0; i < array.length; i++) {
        if(callback(array[i]) === false) {
          testPass = false;
          break;

        }
      }

      return testPass;
};

console.log(any(array3,cb));

// Question 5
// Write a function that returns a new array
// made up of the array elements for which invoking
// the callback returns a truthy value

///Can;t get it to work yet.

let array4 = [1,2,3,4,5,6,7];

let cb2 = function(i) {
     if(i === true) {
     return i;
   }
 };

const select = function select(array, callback) {
  let newArray = [];


  for (let i = 0; i < array.length; i++) {
    if(array[i] === true) {
    newArray[i] = callback(array[i]);
  }
}

  return newArray || 0;

};

console.log(select(array4,cb2));

// Question 6
// Implement the `every` function to test if all elements
// in an array are a `typeof` number
let testArray = [1,2,3,4,5];

let testPass = testArray.every(i => typeof i === 'number');
