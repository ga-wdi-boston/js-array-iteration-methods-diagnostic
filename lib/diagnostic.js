'use strict'

// Question 1
// Write a callback for reduce that selects
// the minimum value in an array
// this callback will be passed by the tests to the reduce method, e.g.
// `let minimum = array.reduce(min);`
const min = function (previous, current) {
  let response1 = previous
  response1 = previous < current ? previous : current
  return response1
}

// Question 2
// Write a callback for reduce that produces
// the sum of the values in the array
// this callback will be passed by the tests to the reduce method, e.g.
// `let total = array.reduce(sum);`
const sum = function (previous, current) {
  const response2 = previous += current
  return response2
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
// // to solve this problem
// const hasNone = function (array, callback) {
//   return array.reduce(function (acc = false, element) {
//     return !acc && !callback(element)
//   })
const hasNone = function (array, callback) {
  const answer = array.every(function (element, index, array) {
    return !callback(element)
  })
  return answer
}

  /*array.foreach(callback(element, index, array) {
    result[index] === true ? result === false : result === true
    return result
  }*/

// Question 4
// Write a function that returns the last element
// for which invoking the callback returns true
// you may use any feature of JavaScript
// to solve this problem
const last = function (array, callback) {
  array.forEach(function (element, index, array) {
    let lastIndex = 0
    console.log(lastIndex)
    const result = array[lastIndex]
    if (callback(element) === true) {
      index = lastIndex
      return result
    }
  })
}

  // push to a second array the index of each true value
  // return highest true value in second array

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
