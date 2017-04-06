'use strict'

// Question 1
// Write a callback for reduce that selects
// the minimum value in an array
// this callback will be passed by the tests to the reduce method, e.g.
// `let minimum = array.reduce(min);`
const a = []
const min = function (previous, current) {
  let minNumber = a.reduce(function (previous, current) {
    return previous < current ? previous : current
  })
  return minNumber
}

// Question 2
// Write a callback for reduce that produces
// the sum of the values in the array
// this callback will be passed by the tests to the reduce method, e.g.
// `let total = array.reduce(sum);`
const sum = function (previous, current) {
  let total = a.reduce(function (previous, current) {
    return previous + current
  })
  return total
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
  array.forEach((e, i, a) => {
    if (callback(e, i, a) === false) {
      return true
    }
    else {
      return false
    }
  })

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
