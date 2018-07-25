/* eslint-disable no-param-reassign */


class Node {
  constructor(key, value) {
    this.prev = {};
    this.next = {};
    this.key = key;
    this.value = value;
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
    this.mappedPairs = new Map();
    this.head = undefined;
    this.tail = undefined;
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
    const node = new Node(key, value);
    this.mappedPairs.delete(key); // ?
    this.mappedPairs.set(key, node); // add to hashmap
    this.addNodeToLinkedList(key);
    console.log('createNode', key, ', size', this.mappedPairs.size);
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
    const node = this.mappedPairs.get(key);
    if (node !== undefined) {
      this.removeNodeFromLinkedList(key);
      this.addNodeToLinkedList(key);
      console.log('getNode', key, ', LRU =', this.tail.key, ', size =', this.mappedPairs.size);
      return node.value;
    }
    console.log('did not find node', key);
    return null;
  }

  // private methods

  /**
  * **********
  * @private
  * @method removeNodeFromLinkedLists
  * **********
  */
  removeNodeFromLinkedList(key) {
    const node = this.mappedPairs.get(key);

    if (node === undefined) return;

    if (node.prev.key !== undefined) {

      const p = this.mappedPairs.get(key);
      p.next = node.next;

    }

    if (node.next.key !== undefined) {
      const n = node.next;

      n.prev = node.prev;
    }

    if (node === this.tail) this.head = node.prev;
    if (node === this.head) this.head = node.prev;
  }

  /**
  * **********
  * @private
  * @method   addNodeToLinkedList(node) {
  * **********
  */
  addNodeToLinkedList(key) {
    const node = this.mappedPairs.get(key);

    if (this.head === undefined) {
      console.log('initializing');
      this.tail = node;
      this.head = node;
    } else {
      if (this.tail.key === node.key) this.tail = this.tail.next; // check tail every time
      this.head.next = node;
      node.prev = this.head;
      this.head = node;
    }
    if (this.mappedPairs.size > this.maxCacheSize) {
      this.removeNodeFromLinkedList(this.tail.key);
      this.mappedPairs.delete(this.tail.key); // remove from hashmap
      this.tail = this.tail.next;
      console.log('tail', this.tail.key, ', head', node.key, ', size', this.mappedPairs.size);
    }
  console.log(this);
  }
}

module.exports = LRUCache;
