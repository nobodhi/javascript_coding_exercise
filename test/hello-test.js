const Lab = require('lab');
const Code = require('code');

const lab = exports.lab = Lab.script(); // TODO no-multi-assign, prefer-destructuring
const describe = lab.describe;
const it = lab.it;
const expect = Code.expect;
const hello = require('../hello.js'); // this is the module being tested

describe('Hello world test', () => {
  it('should say "hello"', (done) => {
    const name = 'joe';
    const result = hello.foo(name);
    expect(result).to.equal('hello joe');
    done();
  });
  it('should say "well hello there"', (done) => {
    const name = 'joe';
    const result = hello.bar(name);
    expect(result).to.equal('well hello there joe');
    done();
  });
});
