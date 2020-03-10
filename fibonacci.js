/**
 * @public
 * @function  fib calculate the fibonacci series
 * @param {number} e length of series to be returned
 * @returns {Array} first 'e' elements as an array
 */

function fib(e) {
  let result = [1]
  let x = y = 1
  if (e < 2 || !(Number.isInteger(e))) 
    return result
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
