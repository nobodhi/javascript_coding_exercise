/**
  Fibonacci series: this module should pass the tests in /test/fib_test.js.
  A naive solution is included below.
  @example
  fibonacci(8); // [1,1,2,3,5,8,13,21,34]
  fibonacci(0); // [1]
*/

// helper function: populates the nth element of the array and returns it. problems:
// call stack only allows 12500 iterations. memoization depends on side effects.
function fibonacci(e) {
  if (e <= 1) {
    result[e] = 1;
  } else if (result[e] === undefined) { // skip those already populated
    result[e] = fibonacci(e - 1) + fibonacci(e - 2);
  }
  return result[e];
}

// returns the completed array
function fib(e) {
  result = []; // memoization
  fibonacci(e);
  // console.log(result);
  return result;
}

module.exports = fib;
