'use strict';

// All of the callbacks in questions 3 through 5 should
// be called with the current element in the array,
// its index, and the array itself
// e.g. callback(currentValue, index, array)

// Question 1
// Write a callback for reduce that selects
// the minimum value in the array
var min = function min(previousValue, currentValue, index, array) {
    var result = previousValue;
    if(currentValue < result) result = currentValue;
    return result;


};

var array = [5, 3, 2, 4]
console.log(array.reduce(min))

// Question 2
// Write a callback for reduce that produces
// the sum of the values in the array
var sum = function sum(previousValue, currentValue, index, array) {
       var result = previousValue;
     result += currentValue;
    return result;


};

var array = [5, 74, 2, 4]
console.log(array.reduce(sum));

// Question 3
// Write a function that returns true
// if invoking the callback for any element
// in the array returns a truthy value
var any = function any(array, callback, thisArg) {

 var result = true;

 array.forEach(function(currentValue, index, array){
     result = result && callback(currentValue, index, array);
 });
 return result;

};

var numbers = [6, 8, 26, 80];

var even = function(currentValue) {
  return (numbers % 2) === 0;
};

var odd = function(currentValue) {
  return (numbers % 2) === 1;
};

var greater = function(currentValue) {
  return numbers > 0;
};
// I am trying to use our last lesson as guidelines but it isnt working.

console.log('even?', any(numbers, even));
console.log('odd?', any(numbers, odd));
console.log('> 0 ?', any(numbers, greater));


// Question 4
// Write a function that returns a new array
// made up of the array elements for which invoking
// the callback returns a truthy value




// Question 5
// Write a function that returns the first element
// for which invoking the callback returns a truthy value
var find = function find(array, callback, thisArg) {

};

// Used by testing
module.exports = {
  min: min,
  sum: sum,
  any: any,
  select: select,
  find: find
};
