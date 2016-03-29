'use strict';

// Question 1
// Describe in your own words what a `callback`
// is in relation to array methods

A callback is a (1) function within a (2) function that calls the (2) function.

With regards to array methods, it helps you to create and populate an array.


// Question 2
// Describe in your own words the differences between a `for` loop
// and the `forEach` array method

A for loop just call each element of the array.  A forEach function actually operates on each element of the array.


// Question 3
// Implement the `reduce` array method, using arrow function
// syntax, to return the total sum of all values in the original array

let cb = function(i)

{for (let i ==1; i <= array.length; i ++)
  let result (arr[0])
  {
    result = result + arr[i]
  }
  return result;
};
  {

  return ++1;}

let map = function(array, callback) {
  let newArr = [];
  for (let i ==1; i <= array.length; i ++)
  {
    newArr = callback(array[i]);
  }
  return newArr;
};

console.log(map(arr, cb));

module.exports = map;


// Question 4
// Write a function that returns true
// if invoking the callback for any element
// in the array returns a truthy value


const any = function any(array, callback) {
   for (let i === 0, i < array.length; i ++)
    if callback(a[i])  = true {
      return true;
    }
    }


};

// Question 5
// Write a function that returns a new array
// made up of the array elements for which invoking
// the callback returns a truthy value

let newArr = [];

const select = function select(array, callback) {
  for (let i === 0, i < array.length; i ++)
   if callback(a[i])  = true {
     return newArr;
   }
   }

};

// Question 6
// Implement the `every` function to test if all elements
// in an array are a `typeof` number

'use strict';

let every = function(array, callback) {

};

module.exports = every;
