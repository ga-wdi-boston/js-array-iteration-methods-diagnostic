'use strict'

// Question 1
// Write a callback for reduce that selects
// the minimum value in an array
// this callback will be passed by the tests to the reduce method, e.g.
// `let minimum = array.reduce(min);`
const min = function (previous, current) {
  return previous < current ? previous : current
}

const array = [1,2,3]
let minimum = array.reduce(min) // --> returns 1

// Question 2
// Write a callback for reduce that produces
// the sum of the values in the array
// this callback will be passed by the tests to the reduce method, e.g.
// `let total = array.reduce(sum);`
const sum = function (previous, current) {
  let result = previous
  result += current
  return result
}

const array = [1,2,3]
let total = array.reduce(sum) // --> returns 6

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
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i], i, array)) {
      return false
    } else {
      return true
    }
  }
}

const array = [1,2,3]
const result = hasNone(array, (e, i, a) => e > 0) // returns false. Every element is greater than 0
const result = hasNone(array, (e, i, a) => e < 0) // returns true. Every element is greater than 0

// Question 4
// Write a function that returns the last element
// for which invoking the callback returns true
// you may use any feature of JavaScript
// to solve this problem
const last = function (array, callback) {
  const index = array.findIndex(callback)
  const lastIndex = index.length - 1
  return lastIndex
}

const array = [1, 2, 3]
const result = last(array, (e, i, a) => e > 0)

// Question 5
// Write a function that returns `true`
// if an only if invoking the callback
// for every element returns `true`
// for one and only one element
// you may use any feature of JavaScript
// to solve this problem
const hasOne = function (array, callback) {
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i], i, array)) {
      return true
    } else {
      return false
    }
  }
    if ()
}

const array = [1, 2, 3]
const result = hasOne(array, (e, i, a) => e === 1)

// Used by testing
module.exports = {
  min,
  sum,
  hasNone,
  hasOne,
  last
}
