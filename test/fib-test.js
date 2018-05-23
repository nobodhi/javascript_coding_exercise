const Lab = require('lab');
const Code = require('code');

const lab = exports.lab = Lab.script(); // TODO no-multi-assign, prefer-desctructuring
const describe = lab.describe;
const it = lab.it;
const expect = Code.expect;
const fibonacci = require('../fibonacci.js'); // this is the module being tested

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
