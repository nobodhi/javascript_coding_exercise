const Lab = require('lab');
const Code = require('code');

const lab = exports.lab = Lab.script(); // TODO no-multi-assign, prefer-desctructuring
const describe = lab.describe;
const it = lab.it;
const expect = Code.expect;
const stringCompare = require('../string-compare.js');

describe('String compare test', () => {
  it('should not find duplicates in this string', (done) => {
    const exp = 'asdfghjkl;';
    const result = stringCompare.containsUnique(exp);
    expect(result).to.equal(true); // generic checks including sum of series
    done();
  });
  it('should find duplicates in this string', (done) => {
    const exp = 'asdfghjkl;g';
    const result = stringCompare.containsUnique(exp);
    expect(result).to.equal(false); // generic checks including sum of series
    done();
  });

});
