const PI = 3.14;
// PI = 3.1415;
console.log(PI);

const add = a => b => a + b;
console.log(add(1)(2));

var fs = require('fs');
var array = fs.readFileSync('./data/input.txt').toString().split("\n");
for(i in array) {
    console.log(array[i]);
}
array.map(a => console.log(a))