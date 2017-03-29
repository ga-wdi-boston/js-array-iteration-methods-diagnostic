'use strict'

// Question 1
// Write a callback for reduce that selects
// the minimum value in an array
// this callback will be passed by the tests to the reduce method, e.g.
// `let minimum = array.reduce(min);`
const min = function (previous, current) {
  let minvalue = 0
  for (let i = 1; i<Array.length; i++)
  if (previous > current){
    minValue = current
  }
}

// Question 2
// Write a callback for reduce that produces
// the sum of the values in the array
// this callback will be passed by the tests to the reduce method, e.g.
// `let total = array.reduce(sum);`
const sum = function (previous, current) {
  let newSum = previous
  for (let i = 1; i<Array.length; i++){
    newSum += current
  }
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
  return index === -1
}

// Question 4
// Write a function that returns the last element
// for which invoking the callback returns true
// you may use any feature of JavaScript
// to solve this problem
const last = function (array, callback) {
  let newArray = []
  for(let i = 0; i<array.length; i++)
  if (callback(array[i])){
    newArray.push(array[i])
  }
  lastOne = newArray.length
  return newArray[lastOne-1]
}

// Question 5
// Write a function that returns `true`
// if an only if invoking the callback
// for every element returns `true`
// for one and only one element
// you may use any feature of JavaScript
// to solve this problem
const hasOne = function (array, callback) {
    let newArray = []
    for(let i = 0; i<array.length; i++)
    if (callback(array[i])){
      newArray.push(array[i])
    }
    if(newArray.length === 1){
    return true
} else {
  return false
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
