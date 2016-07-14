'use strict';

const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);

const expect = chai.expect;

const assessment = require('../lib/diagnostic.js');

describe('reduce', function() {

  let array = [-1, -2, -3, -4, -5];

  describe('sum', function() {

    it('returns the sum of the array', function() {
      expect(array.reduce(assessment.sum)).to.equal(-15);
    });

  });

  describe('min', function() {

    it('returns the minimum of the array elements', function() {
      expect(array.reduce(assessment.min)).to.equal(-5);
    });

  });

});

describe('enumerable', function() {

  let array = [-1, -2, -3, -4, -5];

  describe('any', function() {

    it('returns false for greater than 0 predicate', function() {
      expect(assessment.any(array, n => n > 0)).to.equal(false);
    });

    it('returns true for less than 0 predicate', function() {
      expect(assessment.any(array, n => n < 0)).to.equal(true);
    });

    it('returns true for equal -3 predicate', function() {
      expect(assessment.any(array, n => n === -3)).to.equal(true);
    });

  });

  describe('select', function() {

    let answer = [-1, -3, -5];

    it('returns correct array for not even predicate', function() {
      expect(assessment.select(array, n => n % 2)).to.deep.equal(answer);
    });

  });

  describe('first', function() {

    let withDuplicates = [{
      name: 'first',
    }, {
      name: 'repeat',
    }, {
      name: 'third',
    }, {
      name: 'repeat',
    }, {
      name: 'fifth',
    }, ]; // jscs: ignore

    it('returns correct object in array', function() {
      expect(assessment.first(withDuplicates,
        o => o.name === 'repeat')).to.equal(withDuplicates[1]);
    });

    it('returns undefined for unmatched object', function() {
      expect(assessment.first(withDuplicates,
        o => o.name === 'fourth')).to.equal(undefined);
    });

  });

});
