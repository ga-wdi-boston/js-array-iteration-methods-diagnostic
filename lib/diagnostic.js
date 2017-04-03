'use strict'

// Question 1
// Write a callback for reduce that selects
// the minimum value in an array
// this callback will be passed by the tests to the reduce method, e.g.
// `let minimum = array.reduce(min);`
const min = function (previous, current) {
  if (current < previous) {
    return current
  }
  return previous
}

// Question 2
// Write a callback for reduce that produces
// the sum of the values in the array
// this callback will be passed by the tests to the reduce method, e.g.
// `let total = array.reduce(sum);`
const sum = function (previous, current) {
  return previous + current
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

const callback = function (element, index, array) {
  return element > 100
}

const array = [1, 2, 3]

const logicTest = function (element, index, array) {
  const result = element === false
  return result
}

const hasNone = function (array, callback) {
  const tempArray = array.map(callback)
  console.log(tempArray)
  if (tempArray.every(logicTest)) {
    return true
  } else return false
}

hasNone(array, callback)

// Question 4
// Write a function that returns the last element
// for which invoking the callback returns true
// you may use any feature of JavaScript
// to solve this problem
const last = function (array, callback) {
  const tempArray = array.map(callback)
  const result = tempArray.lastIndexOf(true)
  return array[result]
}

// Question 5
// Write a function that returns `true`
// if an only if invoking the callback
// for every element returns `true`
// for one and only one element
// you may use any feature of JavaScript
// to solve this problem
const hasOne = function (array, callback) {
  const tempArray = array.filter(callback)
  if (tempArray.length === 1) {
    return true
  }
  return false
}

// Used by testing
module.exports = {
  min,
  sum,
  hasNone,
  hasOne,
  last
}
