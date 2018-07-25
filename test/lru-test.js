const chai = require('chai');

const expect = chai.expect;
const assert = chai.assert;


const lruCache = require('../lru-cache-es6.js'); // this is the module being tested
const maxSize = 5;

describe('Load cache test', () => {
  it('should create a cache of size ' + maxSize, (done) => {
    const cache = new lruCache(5);
    let result;
    cache.createNode('1', '1 value');
    cache.createNode('2', '2 value');
    cache.createNode('3', '3 value');
    cache.createNode('4', '4 value');
    cache.createNode('5', '5 value'); // size = 5, LRU = 2
    assert.equal(cache.mappedPairs.size, maxSize);
    assert.equal(cache.head.key, 5);
    assert.equal(cache.tail.key, 1);
    result = cache.getNode(5);
    console.log(result);
    assert.equal(result, '5 value');
    cache.createNode('6', '6 value');
    cache.createNode('7', '7 value');
    cache.createNode('8', '8 value');
    cache.createNode('9', '9 value');
    cache.createNode('10', '10 value');
    cache.createNode('11', '11 value');
    assert.equal(cache.mappedPairs.size, maxSize);
    
    done();
  });

});
