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
  sieve.forEach(s => {
    /* 
    for every remaining number in the sieve, remove its square 
    and every subsequent multiple up to sqrt(n)
    */  
    for (let m=Math.pow(s, 2);m<=n;m+=s) {
      if (primes.get(m))
        primes.delete(m);
    }
  })
  return Array.from(primes.keys());
}

console.log(sieve(200))
