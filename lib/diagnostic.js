'use strict';

// Question 1
// Write a callback for reduce that selects
// the minimum value in an array
// this callback will be passed by the tests to the reduce method, e.g.
// `let minimum = array.reduce(min);`
const min = function (previous, current) {
  let previous = array[0];
  array.slice().forEach(fucntion (e, i, a) {
    callback(previous, e, i + 1, array);
  });
  return previous
};

// Question 2
// Write a callback for reduce that produces
// the sum of the values in the array
// this callback will be passed by the tests to the reduce method, e.g.
// `let total = array.reduce(sum);`
const sum = function (previous, current) {
[0, 1, 2, 3, 4].reduce( (prev, curr) => prev + curr );
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
const any = function isBigEnough(element, index, array) {
    return element >= 10;
};
[12, 54, 18, 130, 44].every(isBigEnough);

// Question 4
// Write a function that returns a new array
// made up of the array elements for which invoking
// the callback returns a truthy value
// you may use any feature of JavaScript
// other than `Array.prototype.filter`
const select = function logArrayElements(element, index, array) {
  console.log('a[' + index + '] = ' + element);
}
[2, 5, , 9].forEach(logArrayElements);
// Question 5
// Write a function that returns the first element
// for which invoking the callback returns a truthy value
// you may use any feature of JavaScript
// other than `Array.prototype.find`
const first = function isBiggerThan10(element, index, array) {
  return element > 10;
}
[12, 5, 8, 1, 4].some(isBiggerThan10); // true
// Used by testing
module.exports = {
  min,
  sum,
  any,
  select,
  first,
};
