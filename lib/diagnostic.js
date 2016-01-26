'use strict';

// All of the callbacks in questions 3 through 5 should
// be called with the current element in the array,
// its index, and the array itself
// e.g. callback(currentValue, index, array)

// Question 1
// Write a callback for reduce that selects
// the minimum value in the array
const min = function min(prev, curr) {
    return prev < curr ? prev : curr;
};

// Question 2
// Write a callback for reduce that produces
// the sum of the values in the array
const sum = function sum(prev, curr) {
    return prev + curr;

};

// Question 3
// Write a function that returns true
// if invoking the callback for any element
// in the array returns a truthy value
const any = function any(array, callback) {
    for (let i = 0; i < array.length; i++){
    if (callback(array[i], i, array)) { // did you
        return  true;
        }
    else {
        return false;
    }

    };
};

// Question 4
// Write a function that returns a new array
// made up of the array elements for which invoking
// the callback returns a truthy value
const select = function select(array, callback) {
    let newarray = [];
    for (let i = 0; i < array.length; i++){
        if (callback(array[i], i, array)) { // did you
            newarray.push(array[i]);
        }
    }
    return newarray;

};

// Question 5
// Write a function that returns the first element
// for which invoking the callback returns a truthy value
const find = function find(array, callback) {

    for (let i = 0; i < array.length; i++){
        if (callback(array[i], i, array)) { // did you
            console.log(array[i]);
            return array[i];
        }

    }

};

// Used by testing
module.exports = {
  min,
  sum,
  any,
  select,
  find,
};
