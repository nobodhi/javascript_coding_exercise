const chai = require('chai');
const fibonacci = require('../fibonacci.js');

const expect = chai.expect;

// TODO add a test that N can only be a natural number.
describe('Fibonacci sum of series test', () => {
  it('should return an array containing the first n+1 elements of the fibonacci sequence', (done) => {
    const x = Math.floor(Math.random() * 20)+1;
    const y = x + 2; // series sum of F(n) = F(n+2)−1
    const result = fibonacci(x);
    const series = result.reduce((arr, val) => { return arr + val; }); // series = sum of array
    const result2 = fibonacci(y);
    console.log(result, result2, series)
    expect(result.length).to.equal(x); // generic checks including sum of series
    expect(result2).to.include(result[x-1]); // the larger series is a superset of the smaller series
    expect(series).to.equal(result2[y-1]-1); // the sum of the series is as expected
    done();
  });
});
