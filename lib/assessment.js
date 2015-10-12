'use strict';

// All of the callbacks in questions 3 through 5 should
// be called with the current element in the array,
// its index, and the array itself
// e.g. callback(currentValue, index, array)

// Question 1
// Write a callback for reduce that selects
// the minimum value in the array
var min = function min(previousValue, currentValue) {
  return previousValue < currentValue ? previousValue : currentValue;
}; //did you mean to use the term reduce here? Reduce takes a set of values - not just for one single (minimum) value.

// Question 2
// Write a callback for reduce that produces
// the sum of the values in the array
var sum = function sum(previousValue, currentValue, index, array) {
  return previousValue + currentValue;
};

var numbers = [3, 2, 1];
numbers.reduce(sum);

// Question 3
// Write a function that returns true
// if invoking the callback for any element
// in the array returns a truthy value
var any = function any(array, callback, thisArg) { //use forEach
  var
};

// Question 4
// Write a function that returns a new array
// made up of the array elements for which invoking
// the callback returns a truthy value
var select = function select(array, callback, thisArg) { //use forEach?
  var newArray = [];

  newArray.push();
};

// Question 5
// Write a function that returns the first element
// for which invoking the callback returns a truthy value
var find = function find(array, callback, thisArg) { //use forEach??

};


//As a general comment, I'm finding that some questions (on this assessment and others) are worded in a way that I don't know what you are really asking us to do and I feel like asking during an assessment isn't really an option since they are time sensitive.

// Used by testing
module.exports = {
  min: min,
  sum: sum,
  any: any,
  select: select,
  find: find
};
