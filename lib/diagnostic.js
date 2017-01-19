'use strict';

// Question 1
// Write a callback for reduce that selects
// the minimum value in an array
// this callback will be passed by the tests to the reduce method, e.g.
// `let minimum = array.reduce(min);

let previousArr = [1, 2, 3, 4, 5];
let smallestNum = previousArr[0];

const min = function (previousArr, smallestNum) {
  for(let i = 0; i < previousArr.length; i++){
    if(previousArr[i] < smallestNum){
      smallestNum = previousArr[i];
    }
  }
  return(smallestNum);
};

// Question 2
// Write a callback for reduce that produces
// the sum of the values in the array
// this callback will be passed by the tests to the reduce method, e.g.
// `let total = array.reduce(sum);
let newArr = [1, 2, 3];
let total = 0;

const sum = function (newArr, total) {
  for(let i = 0; i < newArr.length; i++){
    total += newArr[i];
  }
  return total;
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

//pseudo code: we need an array to test and a function to run a test to
//check each element of the array and tell us if it is true or false. If
// a single instance of true comes up, we return a true value, otherwise, we return false

let ourArray = [1, 2, 3];

let isTrue = true;

const any = function (ourArray, isTrue) {
  for(let i = 0; i < ourArray.length; i++){
    if(ourArray[i] = true){
      return isTrue = true;
    } else {
      return false;
    }
  }

};

// Question 4
// Write a function that returns a new array
// made up of the array elements for which invoking
// the callback returns a truthy value
// you may use any feature of JavaScript
// other than `Array.prototype.filter`
const select = function (/* array, callback */) {

};

// Question 5
// Write a function that returns the first element
// for which invoking the callback returns a truthy value
// you may use any feature of JavaScript
// other than `Array.prototype.find`
const first = function (/* array, callback */) {

};

// Used by testing
module.exports = {
  min,
  sum,
  any,
  select,
  first,
};
