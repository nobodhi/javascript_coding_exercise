// count the occurrences of an element in an array
const arr = [5, 5, 5, 2, 2, 2, 2, 2, 9, 4];

// using for loop
const counts1 = {};
for (var i = 0; i < arr.length; i++) {
  var num = arr[i];
  counts1[num] = counts1[num] ? counts1[num] + 1 : 1;
}
console.log("iteratively", counts1);

// using ES6 map-reduce
const counts2 = {};
arr.map(val=>counts2[val]=(counts2[val]||0)+1);
const total = arr.reduce((acc, val) => acc + val || 1)
console.log("map", counts2);
console.log("reduce", total)

// using forEach
const counts3 = {}
arr.forEach(number=>counts3[number]=(counts3[number]||0)+1);
console.log("forEach", counts3)

// using ES6 Map() 
var countMap=new Map();
arr.forEach(number=>countMap.set(number,(countMap.get(number)||0)+1));
console.log(countMap);
