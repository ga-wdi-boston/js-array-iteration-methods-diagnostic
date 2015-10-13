'use strict';

// All of the callbacks in questions 3 through 5 should
// be called with the current element in the array,
// its index, and the array itself
// e.g. callback(currentValue, index, array)

// Question 1
// Write a callback for reduce that selects
// the minimum value in the array
<<<<<<< HEAD
var min = function min(array, callback, initialValue) {
  var previousValue;
  if (initialValue !== undefined) {
    previousValue = initialValue;
  } else {
    array = array.slice();
    previousValue = array.shift();
  }

  array.forEach(function(currentValue, index, array) {
    previousValue = callback(previousValue, currentValue, index, array);
  });

  return previousValue;
};

var prod = function prod(previousValue, currentValue, index, array) {
  return previousValue * currentValue;
=======
var min = function min(previousValue, currentValue) {
  return previousValue < currentValue ? previousValue : currentValue;
>>>>>>> origin/solution
};

// Question 2
// Write a callback for reduce that produces
// the sum of the values in the array
<<<<<<< HEAD
var sum = function sum(numbers) {
    var total = 0;
for ( var i = 0; i < numbers.length; i++ ){
    total += numbers[i];
}
    return total;
}
// is this what you want????
=======
var sum = function sum(previousValue, currentValue) {
  return previousValue + currentValue;
};
>>>>>>> origin/solution

// Question 3
// Write a function that returns true
// if invoking the callback for any element
// in the array returns a truthy value
var any = function any(array, callback, thisArg) {
<<<<<<< HEAD
// No idea how to begin
// a for loop?
//I am not understanding callbacks
=======
  var result = false;
  array.forEach(function(currentValue, index, array) {
    result = result || callback(currentValue, index, array);
  });

  return result;
>>>>>>> origin/solution
};

// Question 4
// Write a function that returns a new array
// made up of the array elements for which invoking
// the callback returns a truthy value
var select = function select(array, callback, thisArg) {
<<<<<<< HEAD
var array = []
array.map
// No idea how to begin
// .map() ????????
=======
  var result = [];
  array.forEach(function(currentValue, index, array) {
    if (callback(currentValue, index, array)) {
      result.push(currentValue);
    }
  });

  return result;
>>>>>>> origin/solution
};

// Question 5
// Write a function that returns the first element
// for which invoking the callback returns a truthy value
var find = function find(array, callback, thisArg) {
<<<<<<< HEAD
// No idea how to begin
// some kind of for loop?
=======
  var result;
  array.forEach(function(currentValue, index, array) {
    if (!result && callback(currentValue, index, array)) {
      result = currentValue;
    }
  });

  return result;
>>>>>>> origin/solution
};

// Used by testing
module.exports = {
  min: min,
  sum: sum,
  any: any,
  select: select,
  find: find
};
