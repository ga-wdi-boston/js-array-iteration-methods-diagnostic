'use strict';

// All of the callbacks in questions 3 through 5 should
// be called with the current element in the array,
// its index, and the array itself
// e.g. callback(currentValue, index, array)

// Question 1
// Write a callback for reduce that selects
// the minimum value in the array
var min = function min(previousValue, currentValue) {
  if previousValue < currentValue{
    return result
  } else {
    return currentValue
  }
};
var result = [3,7,1,10].reduce(min);

console.log(result);

// Source used https://msdn.microsoft.com/library/ff679975(v=vs.94).aspx

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
  var restult = false;// will need to store the result of the boolean in a variable. need to initalize it to false.
  for (var i = 0; i < array.length; i++) { // iterate throught the array
    result = result || callback(array[i], i, array); // invoke callback for the current element in that array. and Or the result into result
  }
  return restult;
};


// Question 4
// Write a function that returns a new array
// made up of the array elements for which invoking
// the callback returns a truthy value

var select = function select(array, callback, thisArg) {
  var arr = [];// need new array
  arr.forEach(function(currentValue, index, array) {
    if (callback(currentValue, index, array)) {
      arr.push(currentValue);// form new array with only elements that return true
    }
  });
  return arr;
};

// Question 5
// Write a function that returns the first element
// for which invoking the callback returns a truthy value
var find = function find(array, callback, thisArg) {
  var result = null // null is delibertly empty
  for (var i = 0; i < array.length; i++) {
    if (callback(array[i]) === true) {
      result = array[i];
      break;
    }
  }
  return result;
};

// Used by testing
module.exports = {
  min: min,
  sum: sum,
  any: any,
  select: select,
  find: find
};
