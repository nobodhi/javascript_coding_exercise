/**
test script for find-pairs coding challenge. a small data file is in data/input.txt
Each line contains titles associated with a user. Find all pairs of such titles.
*/
const chai = require('chai');

const expect = chai.expect;
const assert = chai.assert;

const findPairs = require('../find-pairs.js'); // this is the module being tested

describe('Find pairs test', () => {
  it('should find all eight results', (done) => {
    const result = findPairs(1);
    assert.equal(result.length, 8); // assert
    done();
  });
  it('should find three pairs that occur at least two times', (done) => {
    const result = findPairs(2);
    assert.equal(result.length, 3); // assert
    done();
  });
  it('should find one pair that occurs three times', (done) => {
    const result = findPairs(3);
    const expected = [['Eminem,Radiohead', 3]];
    expect(result).to.deep.equal(expected); // expect
    done();
  });
});
