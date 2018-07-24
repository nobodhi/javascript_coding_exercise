/* eslint-disable no-param-reassign */

class Node {
  constructor(key, data) {
    this.key = key;
    this.data = data;
    this.previous = null;
    this.next = null;
  }
}

/**
  * **********
  * @constructor
  * **********
*/
class LRUCache {
  constructor(maxCacheSize) {
    this.maxCacheSize = maxCacheSize;
    this.mappedPairs = {};
    this.head = null;
    this.tail = null;
  }

  // public methods

  /**
  * **********
  * @public
  * @method createNode
  * @param {string} key
  * @param {string} value
  * @returns {void}
  * **********
  */

  createNode(key, value) {
    if (this.mappedPairs[key] !== undefined) {
      const node = this.mappedPairs[key];
      node.data = value;
      this.removeNodeFromLinkedList(node);
      this.addNodeToLinkedList(node);
      return;
    }

    const node = new Node(key, value);
    this.addNodeToLinkedList(node);
    this.mappedPairs[key] = node;
  }

  /**
  * **********
  * @public
  * @method getNode
  * @param {string} key
  * @returns {string}
  * **********
  */

 getNode(key) {
    if (this.mappedPairs[key] !== undefined) {
      const node = this.mappedPairs[key];
      this.removeNodeFromLinkedList(node);
      this.addNodeToLinkedList(node);
      return node.value;
    }
    return null;
  }

  // private methods

  /**
  * **********
  * @private
  * @method   addNodeToLinkedList(node) {
  * **********
  */
  addNodeToLinkedList(node) {
    node.previous = null;
    node.next = null;

    if (this.head === null) {
      this.tail = node;
      this.head = node;
    } else {
      this.head.next = node;
      node.prev = this.head;
      this.head = node;
    }
    if (Object.keys(this.mappedPairs).length > this.maxCacheSize) {
      const id = this.tail.key;
      this.deleteNode();
      delete this.mappedPairs[id];
    }
  }

  /**
  * **********
  * @private
  * @method removeNodeFromLinkedLists
  * **********
  */
  removeNodeFromLinkedList(node) {
    if (node === undefined) return;
    if (node.prev !== undefined) node.prev.next = node.next;
    if (node.next !== undefined) node.next.prev = node.prev;
    if (node === this.tail) this.tail = node.next;
    if (node === this.head) this.head = node.prev;
  }

  /**
  * **********
  * @private
  * @method deleteNode
  * **********
  */
  deleteNode(node) {
    if (node !== undefined) {
      this.removeNodeFromLinkedList(node);
      delete this.mappedPairs[node]; // remove from hashmap
    }
  }
}

const cache = new LRUCache(5);
console.log(cache.getNode(1));
cache.createNode(1, '1');
cache.createNode(2, '2');
cache.createNode(5, '5');
cache.createNode(6, '6');
cache.createNode(7, '7');
console.log(cache.getNode(6));
cache.createNode(12, '12');
cache.createNode(15, '15');
cache.createNode(16, '16');
console.log(cache.getNode(7));
cache.createNode(17, '17');
console.log(cache.getNode(15));
console.log("*************************");
console.log(cache);
