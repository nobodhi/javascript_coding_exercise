// sum an array using reduce 
const arr = [5, 5, 5, 2, 2, 2, 2, 2, 9, 4];
console.log(arr)
console.log("sum", arr.reduce( (acc, val) => acc + val ,0)); // initial value of 0
// double everything
console.log("use map to double array", arr.map(val => 2*val))
const doubleArray = arr => arr.map(val => 2 *val)
console.log("using a function", doubleArray(arr))
// sum
console.log("sum", arr.reduce( (acc, val) => acc + 2*val , 0 ) );

// spread and filter
const arr1 = [1, 2]
const arr2 = [...arr1, 3] // "spread out" the array. alternately use .concat()
const arr3 = [0,2,4,66,377,8,48]
// filter array by value or by index
const arr4 = arr3.filter((elem, idx) => elem<5) 
const arr5 = arr3.filter((elem, idx) => idx<5) 
console.log ("spread and filter", arr1, arr2)
console.log("random array", arr3)
console.log("elem < 5", arr3, "idx < 5", arr4)
 
