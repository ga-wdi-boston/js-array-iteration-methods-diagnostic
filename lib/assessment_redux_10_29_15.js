'use strict';

// All of the callbacks in questions 3 through 5 should
// be called with the current element in the array,
// its index, and the array itself
// e.g. callback(currentValue, index, array)

// Question 1
// Write a callback for reduce that selects
// the minimum value in the array
var min = function min (previousValue, currentValue){
  if (previousValue < currentValue){
    return previousValue;
  } else { return currentValue;
  }
};

[1, 5, 7, 3, -5, 0].reduce(min);


// Question 2
// Write a callback for reduce that produces
// the sum of the values in the array
var sum = function sum(previousValue, currentValue) {
  return previousValue + currentValue;
};

[1, 5, 7, 3, -5, 0].reduce(add);



// Question 3
// Write a function that returns true
// if invoking the callback for any element
// in the array returns a truthy value
var any = function any(array, callback, thisArg) {
  var result = false;
array.forEach(function(currentValue, index, array) {
result = result || callback(currentValue, index, array);
 });

 return result;
};
var even = function(value){
    if (value % 2 !== 0){
        return false;
    } else { return true;
}
}

any([1, 2, 3], even);


// Question 4
// Write a function that returns a new array
// made up of the array elements for which invoking
// the callback returns a truthy value
var select = function select(array, callback, thisArg) {
  var result = false;
  array.forEach(function(currentValue, index, array) {
    result = result || callback(currentValue, index, array);
 });

 return result;
};

var even = function(value){
    if (value % 2 !== 0){
        return false;
    } else { return [5, 6, 3, 7];
  }
};

select([1, 2, 3], even)
// Question 5
// Write a function that returns the first element
// for which invoking the callback returns a truthy value
var find = function find(array, callback, thisArg) {
  var result = false;
  array.forEach(function(currentValue, index, array) {
    result = result || callback(currentValue, index, array);
 });

 return result;
};

var even = function(value){
    if (value % 2 !== 0){
        return false;
    } else { return value;
    }
};

find([1, 2, 3], even);



// Used by testing
module.exports = {
  min: min,
  sum: sum,
  any: any,
  select: select,
  find: find
};
