'use strict'

// Question 1
// Write a callback for reduce that selects
// the minimum value in an array
// this callback will be passed by the tests to the reduce method, e.g.
// `let minimum = array.reduce(min);`
const min = function (previous, current) {

  // use an accumulator
  for (let i = 0; i < previous.length; i++) {

    // create empty array
    let minValue = []

    // this assigns the previous array elements to the minValue
    // array so that the original array is not modified
    minValue[i] = previous[i]

    // use the Math.min function to find the min value in an array.
    current = Math.min(minValue)
  }
  return current
}

// Question 2
// Write a callback for reduce that produces
// the sum of the values in the array
// this callback will be passed by the tests to the reduce method, e.g.
// `let total = array.reduce(sum);`
const sum = function (previous, current) {

  // zero out current value
  current = 0

  // use an accumulator
  for (let i = 0; i < previous.length; i++) {
    // sum each element to current
    current = current + previous[i]
  }

  return current
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
