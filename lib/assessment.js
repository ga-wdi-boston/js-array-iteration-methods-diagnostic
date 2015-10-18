'use strict';

// All of the callbacks in questions 3 through 5 should
// be called with the current element in the array,
// its index, and the array itself
// e.g. callback(currentValue, index, array)

// Question 1
// Write a callback for reduce that selects
// the minimum value in the array
var min = function min(previousValue, currentValue, index, array) {

  var minValue = previousValue;

    if(currentValue < minValue) {
      minValue = currentValue;
    }
  return minValue;
  }
var i = [2,4,9,1,5];
console.log(i.reduce(min));


// Question 2
// Write a callback for reduce that produces
// the sum of the values in the array
var sum = function sum(previousValue, currentValue, index, array) {

  var sumTotal = previousValue;
  return sumTotal += currentValue;
};

var i = [2,4,9,1,5];
console.log(i.reduce(sum));

// Question 3
// Write a function that returns true
// if invoking the callback for any element
// in the array returns a truthy value
var any = function any(array, callback, thisArg) {
  var result = true;
  array.forEach(function(currentValue,index,array){
    result = result && callback(currentValue, index, array);
  });
  return result;
};
var numbers = [2,5,8,9];

var truthy = function(currentValue) {
  return (currentValue % 2) === 0;
}

console.log('truthy?', every(numbers, truthy));

// Question 4
// Write a function that returns a new array
// made up of the array elements for which invoking
// the callback returns a truthy value
var select = function select(array, callback, thisArg) {

};

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
