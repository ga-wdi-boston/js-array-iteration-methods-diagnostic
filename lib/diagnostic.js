'use strict';

// Question 1
// Write a callback for reduce that selects
// the minimum value in an array
// this callback will be passed by the tests to the reduce method, e.g.
// `let minimum = array.reduce(min);`
const min = function (originalArray, callback, initalValue) {
  const workingArray = originalArray.slice();
  let accumulator = initalValue;
  if (typeOf === 'undefined') {
    accumulator = workingArray.shift();
  }
  workingArray.forEach(function (element, index /*, workingArray  */) {
    accumulator = callback(accumulator, element, index, originalArray);
  });
};

// this is not right but I think the answer is supposed to be similar to what we worked on yesterday with reduce

// Question 2
// Write a callback for reduce that produces
// the sum of the values in the array
// this callback will be passed by the tests to the reduce method, e.g.
// `let total = array.reduce(sum);`
const sum = function (originalArray, callback, initalValue) {
  let workingArray = originalArray.reduce(function(originalArray, callback, initalValue));
  return
};

// All of the callbacks in questions 3 through 5 should
// be called with the current element in the array,
// its index, and the array itself
// i.e. callback(element, index, array)

// Question 3
// Write a function that returns true
// if invoking the callback for any element
// in the array returns a truthy value
// you may use any feature of JavaScript
// other than `Array.prototype.some`
const any = function (workingArray, callback) {
  let index = workingArray.findIndex(callback);
  if (index < 0) {
    return false;
  }
  return true;
};


// Question 4
// Write a function that returns a new array
// made up of the array elements for which invoking
// the callback returns a truthy value
// you may use any feature of JavaScript
// other than `Array.prototype.filter`
const select = function (workingArray, callback) {
  const newArry = new Array(workingArray.length);
  workingArray.forEach((element, index, array)=> {
    newArray[index] = callback(element, index, array);
  });
  return newArray;
};

//again, I think it's supposed to be similar to yesterday's lesson but I still not able to change it for the problem

// Question 5
// Write a function that returns the first element
// for which invoking the callback returns a truthy value
// you may use any feature of JavaScript
// other than `Array.prototype.find`
const first = function (workingArray, callback) {
  let index = workingArray.findIndex(callback);
  if (index < 0) {
    return undefined;
  }

  return workingArray[index];
};


// Used by testing
module.exports = {
  min,
  sum,
  any,
  select,
  first,
};
