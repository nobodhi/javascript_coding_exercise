// temp.js
const LRUCache = require('./lru-cache-es6.js');
let result = '';
const cache = new LRUCache(4);
// user performs 'slow lookup' and creates a new key value pair
cache.createNode('1', '1 value');
cache.createNode('2', '2 value');
cache.createNode('3', '3 value');
cache.createNode('4', '4 value');
cache.createNode('5', '5 value'); // size = 5, LRU = 2
cache.createNode('6', '6 value');
cache.createNode('7', '7 value');
cache.createNode('8', '8 value');
cache.createNode('9', '9 value');


// result = cache.getNode('3');
// // console.log('result is: ', result);
// cache.createNode('1', '1 value'); // test re-insertion
// result = cache.getNode('1');
// // console.log('result is: ', result);


// result = cache.getNode('2');


// // // result = cache.getNode('asdfasdfasdf');
