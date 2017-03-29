'use strict'

// Question 1
// Write a callback for reduce that selects
// the minimum value in an array
// this callback will be passed by the tests to the reduce method, e.g.
// `let minimum = array.reduce(min);`
const min = function (previous, current) {
  // assign a minimum value variable to return
  const minValue = previous
  // for every value in an array of an arbitrary length
  for (let i = 0; arguments.length; i++) {
    if (current < previous) {
// set the current value to the min value if it is less than previous
  current = minValue
// return the min value
  } return minValue
  }
}

// Question 2
// Write a callback for reduce that produces
// the sum of the values in the array
// this callback will be passed by the tests to the reduce method, e.g.
// `let total = array.reduce(sum);`
const sum = function (previous, current) {
// start with the sum at the zero
  let sumOfArray = 0
  let previous = initialValue
  // for every value in an array of an arbitrary length
  for (let i = 0; arguments.length; i++) {
    // add the values of the arguments to the sum
    sumOfArray = initialValue + current
  }
  // return sum
  return sumOfArray
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
// create new array
  const workingArray = array.length
  // for every item in the array
  for (let i = 0; i < array.length; i++) {
    //return true if the callback returns false
    if (!callback(e, i, a)) {
      return true
    }
  }
// return new array
  return workingArray
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
