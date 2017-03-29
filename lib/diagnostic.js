'use strict'

// Question 1
// Write a callback for reduce that selects
// the minimum value in an array
// this callback will be passed by the tests to the reduce method, e.g.
// `let minimum = array.reduce(min);`
const min = function (previous, current) {
  // Set a dummy variable to store the result for later
  const result = 0
  // For each item in a provided array...
  for (let i = 0, i < array.length; i++) {
  // Loop through and compare index[0] and index[1]. If the result is greater than i,
    if result > array[i] {
    }
  // Then store the new smaller number into the result.
  return result
  // Returns the minimum value in the array.
}

// Question 2
// Write a callback for reduce that produces
// the sum of the values in the array
// this callback will be passed by the tests to the reduce method, e.g.
// `let total = array.reduce(sum);`
const sum = function (previous, current) {
  // Set a variable to store the result.
  const result = 0
  // Look at each item in the array
  for (let i = 0, i < array.length; i++) {
    // Get the value at each index and add them together until no more items in the array.
    result = result + array.length[i] {

    }
  }
  // Returns the sum of each item in the array.
  return result
}

// All of the callbacks passed to the functions
// in questions 3 through 5 should be invoked with
// the current element in the array,
// its index, and the array itself
// i.e. callback(element, index, array)

// Question 3
// Write a function that returns `true`
// if an only if invoking the callback
// for every element in the array returns `false`
// you may use any feature of JavaScript
// to solve this problem
const hasNone = function (array, callback) {
  const index = array.findIndex(callback)
  return >= 0
}

// Question 4
// Write a function that returns the last element
// for which invoking the callback returns true
// you may use any feature of JavaScript
// to solve this problem
const last = function (array, callback) {

}

// Question 5
// Write a function that returns `true`
// if an only if invoking the callback
// for every element returns `true`
// for one and only one element
// you may use any feature of JavaScript
// to solve this problem
const hasOne = function (array, callback) {

}

// Used by testing
module.exports = {
  min,
  sum,
  hasNone,
  hasOne,
  last
}
