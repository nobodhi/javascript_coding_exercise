/**
 * @public
 * @function  fib calculate the fibonacci series
 * @param {number} e length of series returned
 * @returns {Array} first n elements as an array
 */

function fib(e) {
  let result = [1]
  let x = y = 1
  if (e < 2 || !(Number.isInteger(e))) 
    return [1]
  for (let i=1;i<e;i++) {
    [x,y] = [y,x+y]
    result.push(x)
  }
  return result;
}

// // testing
// let e = 0;
// console.log(fib(e))

module.exports = fib;
