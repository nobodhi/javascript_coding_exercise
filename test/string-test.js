const Lab = require('lab');
const Code = require('code');

const lab = exports.lab = Lab.script(); // TODO no-multi-assign, prefer-desctructuring
const describe = lab.describe;
const it = lab.it;
const expect = Code.expect;
const stringCompare = require('../string-compare.js'); // this is the module being tested

describe('String compare test', () => {
  it('should not find duplicates in this string', (done) => {
    const exp = 'asdfghjkl;';
    const result = stringCompare.containsUnique(exp);
    expect(result).to.equal(true);
    done();
  });
  it('should find duplicates in this string', (done) => {
    const exp = 'asdfghjkl;g';
    const result = stringCompare.containsUnique(exp);
    expect(result).to.equal(false);
    done();
  });
  it('should find these strings to be permutations', (done) => {
    const exp1 = 'I am Lord Voldemort'.toLowerCase();
    const exp2 = 'Tom Marvolo Riddle '.toLowerCase(); // hack
    const result = stringCompare.isPermutation(exp1, exp2);
    expect(result).to.equal(true);
    done();
  });

});
