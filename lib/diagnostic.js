'use strict';

// Question 1
// Describe in your own words what a `callback`
// is in relation to array methods


a callback is a function with in a function.  You can pass the callback function as an argument so it can be invoked by the function using its value.

// Question 2
// Describe in your own words the differences between a `for` loop
// and the `forEach` array method

They both iterate over all the elemts in an array.  The foreach loop can not be broken out of.

// Question 3
// Implement the `reduce` array method, using arrow function
// syntax, to return the total sum of all values in the original array

let arr = [1, 2, 3];
console.log(arr.reduce((a, b) => a + b));


// Question 4
// Write a function that returns true
// if invoking the callback for any element
// in the array returns a truthy value
let testArray = [1, 8, 60, 122];

let typeof = function(num) {
return  num % 2 === 0;
};

let every = function(array, callback) {
  let testPass = true;
for (let i = 0; i < array.length; i++) {
  if (callback(array[i]) === false){
    testPass = false;
    break;
  }
}
return testPass;
};
console.log(every(testArray, isEven));





// Question 5
// Write a function that returns a new array
// made up of the array elements for which invoking
// the callback returns a truthy value

  const select = function select(array, callback) {

    let newArray = [];

     for (let i = 0; i < array.length; i++) {
       if(calback(array[i]) === true) {
        newArray.push(array[i]);
       }
     }
     return newArray;
    };


// Question 6
// Implement the `every` function to test if all elements
// in an array are a `typeof` number

let testArray = [1, 8, 60, 122];

let typeof = function(num) {
return  typeof === num;
}


let every = function(array, callback) {
  let testPass = true;
for (let i = 0; i < array.length; i++) {
  if (callback(array[i]) === false){
    testPass = false;
    break;
  }
}
return testPass;
};
console.log(every(testArray, typeof));
