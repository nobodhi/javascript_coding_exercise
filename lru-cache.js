var Node = function (key, data) {
  this.key = key;
  this.data = data;
  this.previous = null;
  this.next = null;
};

/**
* @constructor
*/
var LRUCache = function (capacity) {
  this.capacity = capacity;
  this.map = {};
  this.head = null;
  this.tail = null;
};

/**
* @private
* @method _add
*/
LRUCache.prototype._add = function (node) {
  node.previous = node.next = null;

  // first item
  if (this.head === null) {
      this.head = node;
      this.tail = node;
  }

  // adding to existing items
  this.head.previous = node;
  node.next = this.head;
  this.head = node;
};

/**
* @private
* @method _remove
*/
LRUCache.prototype._remove = function (node) {
  // empty cache
  if (this.head === null || this.tail === null) {
      return;
  }

  // only item in the cache
  if (this.head === node && this.tail === node) {
      this.head = this.tail = null;
      return;
  }

  // remove from head
  if (this.head === node) {
      this.head.next.previous = null;
      this.head = this.head.next;
      return;
  }

  // remove from tail
  if (this.tail === node) {
      this.tail.previous.next = null;
      this.tail = this.tail.previous;
      return;
  }

  // remove from middle
  node.previous.next = node.next;
  node.next.previous = node.previous;
};

/**
* @private
* @method _moveFirst
*/
LRUCache.prototype._moveFirst = function (node) {
  this._remove(node);
  this._add(node);
};

/**
* @private
* @method _removeLast
*/
LRUCache.prototype._removeLast = function () {
  this._remove(this.tail);
};

/**
* @param {number} key
* @returns {number}
*/
LRUCache.prototype.get = function (key) {
  // Existing item
  if (this.map[key] !== undefined) {

      // Move to the first place
      var node = this.map[key];
      this._moveFirst(node);

      // Return
      return node;

  }

  // Not found
  return -1;
};

/**
* @param {number} key
* @param {number} value
* @returns {void}
*/
LRUCache.prototype.set = function (key, value) {
  // Existing item
  if (this.map[key] !== undefined) {

      // Move to the first place
      var node = this.map[key];
      node.data = value;
      this._moveFirst(node);
      return;
  }

  // Ensuring the cache is within capacity
  if (Object.keys(this.map).length >= this.capacity) {
      var id = this.tail.key;
      this._removeLast();
      delete this.map[id];
  }

  // New Item
  var node = new Node(key, value);
  this._add(node);
  this.map[key] = node;
};

var cache = new LRUCache(5);
console.log(cache.get(1));
cache.set(1, '1');
cache.set(2, '2');
cache.set(5, '5');
cache.set(6, '6');
cache.set(7, '7');
console.log(cache.get(6));
cache.set(12, '12');
cache.set(15, '15');
cache.set(16, '16');
console.log(cache.get(7));
cache.set(17, '17');
console.log(cache);