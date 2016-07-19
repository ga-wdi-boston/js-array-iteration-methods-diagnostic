'use strict';

// All of the callbacks in questions 3 through 5 should
// be called with the current element in the array,
// its index, and the array itself
// e.g. callback(currentValue, index, array)

// Question 1
// Write a callback for reduce that selects
// the minimum value in the array
const arr = [1, 6, 7];
const min = function(element) {
  if(element > 6){
    return true;
  }else{
    return false;
  }
};
console.log(arr.reduce(element=> min(element)));
// Question 2
// Write a callback for reduce that produces
// the sum of the values in the array
const theArr = [1, 4, 6];
const sumAll = function(prev, curr) {
  return prev + curr;
};
console.log(theArr.reduce(sumAll, 0));
console.log(theArr.reduce((prev, curr)=> prev + curr));

// Question 3
// Write a function that returns true
// if invoking the callback for any element
// in the array returns a truthy value
const thisArr = [1, 3, 6, 12];
const any = function (element){
  if(element > 3){
    return true;
  }else {
return false;
}
};
console.log(thisArr.every(element=> any(element)));
// Question 4
// Write a function that returns a new array
// made up of the array elements for which invoking
// the callback returns a truthy value
const select = function select(array, callback) {

};

// Question 5
// Write a function that returns the first element
// for which invoking the callback returns a truthy value
const first = function first(array, callback) {

};

// Used by testing
module.exports = {
  min,
  sum,
  any,
  select,
  first,
};
