'use strict';

// // All of the callbacks in questions 3 through 5 should
// // be called with the current element in the array,
// // its index, and the array itself
// // e.g. callback(currentValue, index, array)



// // In order to prove my competence, I will use the space under the new answer
// // to explain my reasoning


// Question 1
// Write a callback for reduce that selects
// the minimum value in the array

var min = function min(previousValue, currentValue){
  return previousValue < currentValue ? previousValue : currentValue;
};

// // We have provided the array for the callback function which we will run through
// // with reduce, and set the first intger returned as previousValue.  We use a ternary
// // operator to compare previousValue and currentValue and return the smaller value
// // based on the conditions of the ternary operation


// // Question 2
// // Write a callback for reduce that produces
// // the sum of the values in the array
// var num = [1,3,5,7,9];

var sum = function sum(previousValue, currentValue){
  return currentValue + previousValue;
};


// // Here we simply pass through the previousValue and currentValue into
// // the callback function and return the sum of the two perameters

// Question 3
// Write a function that returns true
// if invoking the callback for any element
// in the array returns a truthy value

// Problem solving run through
// We will be returning a boolean value at some point
// returns its compute value based on what
var any = function any(array, callback, thisArg){
  var result = false;
  array.forEach(function(currentValue, index, array) {
    result = result || callback(currentValue, index, array);
  });
  return result;
};


// Question 4
// Write a function that returns a new array
// made up of the array elements for which invoking
// the callback returns a truthy value
var select = function select(array, callback, thisArg) {
    var arr = [];
    array.forEach(function(currentValue,previousValue){
      if(callback(currentValue)){
        arr.push(currentValue);
      }
    });
  };
// Question 5
// Write a function that returns the first element
// for which invoking the callback returns a truthy value

var find = function find(array, callback, thisArg) {
   var element;
   array.forEach(function(currentValue){
     if(callback(currentValue)){
      element = currentValue;
     }
  });
   return element;
 };

// Used by testing
module.exports = {
  min: min,
  sum: sum,
  any: any,
  select: select,
  find: find
};
