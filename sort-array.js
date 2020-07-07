// flatten a multi-dimensional array and sort uniquely

const fs = require('fs');
var array = fs.readFileSync('./data/input.txt').toString().split("\n");
for(i in array) {
    console.log(i, array[i]);
}
array

const parsed = array.map(a => a.split(","))

console.log("parsed, flanttened and sorted", parsed.flat().sort())

// using forEach and Object.values()
const uniq = {}
parsed.flat().sort().forEach(w=>uniq[w]=w); // dummy value
console.log("using Object.values()", Object.keys(uniq))

// using a function
const uSort = (arr) => {
  const uniq = {}
  arr.flat().sort().forEach(w=>uniq[w]=(uniq[w]||0)+1) // should we want counts, too
  // console.log(uniq) 
  return Object.keys(uniq)
}
const unique2 = uSort(parsed)
console.log("using a counting function", unique2)

// using ES6 Sets 
const uniqueSet = new Set(parsed.flat().sort()); 
const unique3 = Array.from(uniqueSet); 
console.log("using ES6 Set:", unique3)
console.log("original ES6 Set:", uniqueSet)
