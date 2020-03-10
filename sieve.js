/**
 * @public  
 * @function sieve erastosthenes' classic method for finding prime numbers
 * @param {number} n return every prime up to n
 * @returns {Array} a list of primes numbers  
 */
const sieve = (n) => {
  const numbers = Array.from(Array(n).keys()).map(x=>++x) 
  numbers.splice(0,1)
  const sieve = Array.from(Array(Math.floor(Math.sqrt(n))+1).keys()).map(x=>++x)
  sieve.splice(0,1)
  const primes = new Map(numbers.map(x => [x, true]))
  /* 
  for every number in the sieve, remove its square and every subsequent multiple up to sqrt(n)
  e.g. (2): 4, 6, 8, 10, ...
  (3): 9, 15, 21, 27, ...
  (5): 25, 35, 55, ...
  */
  console.log(sieve)
  console.log(numbers)
  console.log(primes)
  return primes

}

sieve(20)
