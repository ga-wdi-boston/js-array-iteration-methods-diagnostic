'use strict';

// All of the callbacks in questions 3 through 5 should
// be called with the current element in the array,
// its index, and the array itself
// e.g. callback(currentValue, index, array)

// Question 1
// Write a callback for reduce that selects
// the minimum value in the array
var min = function min(previousValue, currentValue, index, array) {
  // re-checking my work for correctness
  return currentValue < previousValue ? currentValue : previousValue;
};

// Question 2
// Write a callback for reduce that produces
// the sum of the values in the array
var sum = function sum(previousValue, currentValue, index, array) {
  return previousValue + currentValue;
};

// Question 3
// Write a function that returns true
// if invoking the callback for any element
// in the array returns a truthy value


// OK. So the feedback didn't really help me understand the question.
// Reviewing my notes and throwing this next guess at a solution over the wall.

// Sidenote: I'm really concerned that I'm not fully understanding functions and parameters
// and how they actually work with each other when nesting functions and parameters...
// aaaaaaand all of that.

// If someone can talk me through it in EXTREMELY simple terms
// it'd be much appreciated. I really think this a big blocker for my progression
// for learning correct syntax and applications of... everything. And if I can
// get this, it'll be a really powerful building block going forward!

// This is try two. I'm going to try a .forEach method
// I'm using my notes from my js-arrays lesson.
// Remember, I'm *still* not fully clear on the inner workings on this
// since I'm not sure I captured correct annotations while trying to keep up with
// the accelerated teaching pace.

var any = function any(array, callback, thisArg) {
  // force the result to a default of false
  // unless the callback sets it to true?
  var result = false;
  array.forEach(function(currentValue, index, array) {
    // I *think* this is the correct syntax in the
    // if statement ()
    // I'm trying to say if whatever the callback
    // does to the currentValue is true,
    // set the result to true

    // I saw this written differently in the solution branch
    // and I'm not clear on a couple of things there
    // I'd love to chat with someone to understand the syntax
    // in the solution branch
    if (callback(currentValue)) {
      result = true;
    }
  });
  return result;
};

// Question 4
// Write a function that returns a new array
// made up of the array elements for which invoking
// the callback returns a truthy value

// Feedback didn't really help me undrestand what I'm not understanding
// Here's try two. Again, I'd love to sit down and talk about this
// in simpler terms!
var select = function select(array, callback, thisArg) {
  var newArray = [];
  array.forEach(function(currentValue, index, array) {
    // if the callback on the currentValue is true
    if (callback(currentValue, index, array)) {
      // add that value to the newArray
        newArray.push(currentValue);
     }
  });
  return newArray;
};

// Question 5
// Write a function that returns the first element
// for which invoking the callback returns a truthy value

// Still need more help understanding what is needed here
// My first attempt was definitely not even close, since
// I didn't understand how to even begin here.

// Here is try two.
var find = function find(array, callback, thisArg) {
  // initialize result as a falsey value
  var result = 0;
  array.forEach(function(currentValue, index, array) {
    // if the callback on the currentValue is true
    if (callback(currentValue, index, array)) {
      // set the result to currentValue
      result = currentValue;
    }
  });
  return result;
};

// Used by testing
module.exports = {
  min: min,
  sum: sum,
  any: any,
  select: select,
  find: find
};
