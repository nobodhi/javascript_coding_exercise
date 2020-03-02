// sandbox

const fibonacci = require('./fibonacci.js');
console.log(fibonacci(100)[50]);


let result = [];
function fib_memoized(n) {
  if (n < 2) {
    result[n] = 1;
  }
  else if (result[n] === undefined) {
    result[n] = fib_memoized(n - 1) + fib_memoized(n - 2);
  }
  return result[n]
}
console.log(fib_memoized(1000));


/*
for comparison this is the same thing but instead
of caching the results we cache the function calls
using partial application.
https://medium.com/@nothingisfunny/memoization-improving-recursive-solution-for-fibonacci-sequence-problem-c02dab7a74e5
*/

function memoize(fn){
  const cache = {}
  return function(...args){
    if (cache[args]){
      return cache[args];
    }
    memo = fn.apply(null, args);
    cache[args] = memo;
    return memo;
  }
}
const fib_partial = memoize(fib);
function fib(n) {
  if (n < 2) {
    return n;
  }
  return fib_partial(n - 1) + fib_partial(n - 2);
}

console.log(fib_partial(1001));