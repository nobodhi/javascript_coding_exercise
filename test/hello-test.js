/*
The expect interface provides function for assertion.
The should interface extends each object with a should property for assertion.
*/
const expect = require('chai').expect;
const should = require('chai').should();
const hello = require('../hello.js'); // this is the module being tested

describe('Hello world test', () => {
  it('should say "hello"', (done) => {
    const name = 'joe';
    const result = hello.shortGreeting(name);
    expect(result).to.equal('hello joe'); // using expect
    done();
  });
  it('should say "well hello there"', (done) => {
    const name = 'joe';
    const result = hello.longGreeting(name);
    (result).should.equal('well hello there joe'); // using should
    done();
  });
});
