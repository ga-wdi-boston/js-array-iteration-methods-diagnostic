'use strict';

// All of the callbacks in questions 3 through 5 should
// be called with the current element in the array,
// its index, and the array itself
// e.g. callback(currentValue, index, array)

// Question 1
// Write a callback for reduce that selects
// the minimum value in the array
var min = function min(previousValue, currentValue, index, array) {

};

// Question 2
// Write a callback for reduce that produces
// the sum of the values in the array
var reduce = function reduce(array, callback){

var sum = function sum(previousValue, currentValue) {
  return previousValue + currentValue;
};

var numbers = [2, 3, 2];
}

console.log(reduce(numbers, sum));

// Question 3
// Write a function that returns true
// if invoking the callback for any element
// in the array returns a truthy value
var any = function any(array, callback, thisArg) {

};
// did not have time to get to this question

// Question 4
// Write a function that returns a new array
// made up of the array elements for which invoking
// the callback returns a truthy value
var select = function select(array, callback, thisArg) {

};
// did not have time to get to this question

// Question 5
// Write a function that returns the first element
// for which invoking the callback returns a truthy value
var find = function find(array, callback, thisArg) {

};
// did not have time to get to this question

// Used by testing
module.exports = {
  min: min,
  sum: sum,
  any: any,
  select: select,
  find: find
};
