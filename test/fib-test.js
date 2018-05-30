const chai = require('chai');
const fibonacci = require('../fibonacci.js');

const expect = chai.expect;

// TODO add a test that N can only be a natural number.
describe('Fibonacci sequence test', () => {
  it('should return an array containing the first n+1 elements of the fibonacci sequence', (done) => {
    const x = 8; // choose any natural number TODO
    const y = x + 2; // series sum of F(n) = F(n+2)−1
    const result = fibonacci(x);
    const series = result.reduce((arr, val) => { return arr + val; }); // series = sum of array
    const result2 = fibonacci(y);
    expect(result.length).to.equal(x+1); // generic checks including sum of series
    expect(result2).to.include(result[x]);
    expect(series).to.equal(result2[y]-1);
    done();
  });
});
