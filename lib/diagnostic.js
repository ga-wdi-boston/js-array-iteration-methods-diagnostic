'use strict'

// Question 1
// Write a callback for reduce that selects
// the minimum value in an array
// this callback will be passed by the tests to the reduce method, e.g.
// `let minimum = array.reduce(min);`
const min = function (previous, current) {
  return previous < current ? previous : current
}

// Question 2
// Write a callback for reduce that produces
// the sum of the values in the array
// this callback will be passed by the tests to the reduce method, e.g.
// `let total = array.reduce(sum);`
const sum = function (previous, current) {
  const value = previous + current
  return value
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
  const newArray = []
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i]) === false) {
      newArray[i] = array[i]
    }
  }
  if (newArray.length === array.length) {
    return true
  }
}

// Question 4
// Write a function that returns the last element
// for which invoking the callback returns true
// you may use any feature of JavaScript
// to solve this problem
const last = function (array, callback) {
  let answer = undefined
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i]) === true) {
      answer = array[i]
    }
  }
  return answer
}

// Question 5
// Write a function that returns `true`
// if an only if invoking the callback
// for every element returns `true`
// for one and only one element
// you may use any feature of JavaScript
// to solve this problem
const hasOne = function (array, callback) {
  const answer = []
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i]) === true) {
      answer.push(array[i])
    }
  }
  if (answer.length === 1) {
    return true
  }
}

// Used by testing
module.exports = {
  min,
  sum,
  hasNone,
  hasOne,
  last
}
