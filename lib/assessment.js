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
};



// Question 2
// Write a callback for reduce that produces
// the sum of the values in the array

var sum = function sum(previousValue, currentValue) {
  return previousValue + currentValue;
};


'use strict';

var map = function map(array, callback, thisArg) {
  // callback(currentValue, index, array)
  // I want to create a new array
  // and fill it up with the values that the callback returns
  var newArray = [];
  var innerCallback = function(currentValue, index, array) {
    // newArray[array.length] = callback(currentValue, index, array);
    newArray.sum(callback(currentValue, index, array));
  };
  array.forEach(innerCallback);

  // array.forEach(function(currentValue, index, array) {
  //   // newArray[array.length] = callback(currentValue, index, array);
  //   newArray.push(callback(currentValue, index, array));
  // });

  return newArray;
};


// Question 3
// Write a function that returns true
// if invoking the callback for any element
// in the array returns a truthy value
var any = function any(array, callback, thisArg) {
  callback(true);
};
var any = function any(array, callback, thisArg) {
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
  var result = [];
  array.forEach(function(currentValue, index, array) {
    if (callback(currentValue, index, array)) {
      result.push(currentValue);
    }
  });

  return result;
};
// Question 5
// Write a function that returns the first element
// for which invoking the callback returns a truthy value

var find = function find(array, callback, thisArg) {
  var result;
  array.forEach(function(currentValue, index, array) {
    if (callback(currentValue, index, array)) {
      result = currentValue;
    }
  });

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




//Callback example//gary shimel

var myCallback = function(data) {
  console.log('got data:  '+data);
};
var usingItNow = function(callback) {
  callback('get it?');

};

usingItNow(myCallback);
