'use strict';

// All of the callbacks in questions 3 through 5 should
// be called with the current element in the array,
// its index, and the array itself
// e.g. callback(currentValue, index, array)

// Question 1
// Write a callback for reduce that selects
// the minimum value in the array

let arr = [1,2,3];


let callbackMin = function (element) {

  let firstElement = arr[0];

  for (let i = 0; i < array.length; i++) {
    let result =   array[i];

if (firstElement < result) {
  return firstElement;
}

  }

};

const min = function min(array, callback) {


};

// Question 2
// Write a callback for reduce that produces
// the sum of the values in the array
const sum = function sum(prev, curr) {

  return prev + sum;

};

const reduce = function(arr, callback, init) {

  let result;

  if(init!=undefined){
    result = init;
  }

  for (let i = 0; i < array.length; i++) {
    result = callback(result,array[i]);
  }

};

reduce(arr, sum, 0);



// Question 3
// Write a function that returns true
// if invoking the callback for any element
// in the array returns a truthy value

const thruthy = function (element) {

  if (element !== undefined){
    return true;
  } else {
    return false;
  }

};

const any = function any(array, callback) {

let result = true;

for (let i = 0; i < array.length; i++) {

  if(callback(array[i]) === false){
    result = false;
  }

}

};

any(arr, thruthy);


// Question 4
// Write a function that returns a new array
// made up of the array elements for which invoking
// the callback returns a truthy value

const thruthyVal = function (element) {

  if (element !== undefined){
    return element;
  }

};

const select = function select(array, callback) {

  let result =[];

  for (let i = 0; i < array.length; i++) {
    result.push(callback(array[i]));
  }
return result;
};

select(arr, thruthyVal);


// Question 5
// Write a function that returns the first element
// for which invoking the callback returns a truthy value



const first = function first(array, callback) {


};


let firstElem = arr.slice(1);

// Used by testing
module.exports = {
  min,
  sum,
  any,
  select,
  first,
};
