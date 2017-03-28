'use strict'

// Allow chai syntax like `expect(foo).to.be.ok;`

const chai = require('chai')
const chaiAsPromised = require('chai-as-promised')

chai.use(chaiAsPromised)

const expect = chai.expect

const diagnostic = require('../lib/diagnostic')

describe('reduce callbacks', function () {
  const array = [-1, -2, -3, -4, -5]

  describe('min', function () {
    it('returns the minimum of the array elements', function () {
      expect(array.reduce(diagnostic.min)).to.equal(-5)
    })
  })

  describe('sum', function () {
    it('returns the sum of the array', function () {
      expect(array.reduce(diagnostic.sum)).to.equal(-15)
    })
  })
})

describe('enumerable', function () {
  const array = [-1, -2, -3, -4, -5]

  describe('hasNone', function () {
    it('returns true for greater than 0 predicate', function () {
      expect(diagnostic.hasNone(array, n => n > 0)).to.be.true
    })

    it('returns false for less than 0 predicate', function () {
      expect(diagnostic.hasNone(array, n => n < 0)).to.be.false
    })

    it('returns false for equal -3 predicate', function () {
      expect(diagnostic.hasNone(array, n => n === -3)).to.be.false
    })
  })

  describe('last', function () {
    const withDuplicates = [{
      name: 'first'
    }, {
      name: 'repeat'
    }, {
      name: 'third'
    }, {
      name: 'repeat'
    }, {
      name: 'fifth'
    } ]

    it('returns correct object in array', function () {
      expect(diagnostic.last(withDuplicates,
        o => o.name === 'repeat')).to.equal(withDuplicates[3])
    })

    it('returns undefined for unmatched object', function () {
      expect(diagnostic.last(withDuplicates,
        o => o.name === 'fourth')).to.equal(undefined)
    })
  })

  describe('hasOne', function () {
    it('returns false for less than 0 predicate', function () {
      expect(diagnostic.hasOne(array, n => n < 0)).to.be.false
    })

    it('returns true for equal -3 predicate', function () {
      expect(diagnostic.hasOne(array, n => n === -3)).to.be.true
    })
  })
})
