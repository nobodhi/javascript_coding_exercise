// flatten a multi-dimensional array and sort uniquely

const fs = require('fs');
var array = fs.readFileSync('./data/input.txt').toString().split("\n");
for(i in array) {
    console.log(i, array[i]);
}
array

const parsed = array.map(a => a.split(","))

console.log("parsed, flanttened and sorted", parsed.flat().sort())

// imperatively, using an object
unique = {}
parsed.flat().sort().forEach(w=>unique[w]=w);
console.log("using an object", Object.values(unique))

// a slightly more functional approach
const uSort = arr => {
  const unique = {}
  arr.flat().sort().forEach(w=>unique[w]=w) // is this functional?
  return Object.values(unique)
}
const unique2 = uSort(parsed)
console.log("functional approach", unique2)

// using ES6 Sets 
const uniqueSet = new Set(parsed.flat().sort()); 
const unique3 = Array.from(uniqueSet); 
console.log("using Set", unique3)


