'use strict'

/*
Comfort: 2
Clarity: 2

I used prior lessons, Google, and my class notes to help with this diagnostic.
*/



// Question 1
// Write a callback for reduce that selects
// the minimum value in an array
// this callback will be passed by the tests to the reduce method, e.g.
// `let minimum = array.reduce(min);`
const min = function (previous, current) {

  //for the callbacks, these are called for each element, correct?

  let result = previous

  if (result < current) {
    return result
  } else {
    result = current
    return result
  }
}

// Question 2
// Write a callback for reduce that produces
// the sum of the values in the array
// this callback will be passed by the tests to the reduce method, e.g.
// `let total = array.reduce(sum);`

// i don't understand for sure if previous or current are arrays or values in
// array; just discovering my questions
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
const hasNone = function (array, callback) {

  array.forEach((e, i, a) => { if !(callback(e, i, a)) false})

}

// Question 4
// Write a function that returns the last element
// for which invoking the callback returns true
// you may use any feature of JavaScript
// to solve this problem

//I don't know this material too well.  will set up a 1:1.  thx.
const last = function (array, callback) {

  array.forEach((e, i, a) => { if (callback(e, i, a)) array[i]})

}

// Question 5
// Write a function that returns `true`
// if an only if invoking the callback
// for every element returns `true`
// for one and only one element
// you may use any feature of JavaScript
// to solve this problem
const hasOne = function (array, callback) {

  for (let i = 0; i < array.length; i++) {
    element = array[i]
    callback(array[i], i, array)
    console.log(array[i])
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
