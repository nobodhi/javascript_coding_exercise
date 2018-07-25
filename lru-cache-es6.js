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
    const oldHead = this.head;
    if (node !== undefined) {

      this.removeNodeFromLinkedList(key); // okay it's gone, we need to add it back
      this.mappedPairs.set(key, node); // add to hashmap
      this.addNodeToLinkedList(key);
      console.log('getNode', key);
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
    let nextNode = {};
    let prevNode = {};

    if (node === undefined) {
      console.log('attempted to remove undefined node', key);
      return;
    }

    // if not the tail
    if (node.prev.key !== undefined) {
      prevNode = this.mappedPairs.get(node.prev.key);
      prevNode.next = node.next;
      if (node === this.head) this.head = prevNode;
    }

    // if not the head
    if (node.next.key !== undefined) {
      nextNode = this.mappedPairs.get(node.next.key);
      nextNode.prev = node.prev;
      if (node === this.tail) this.tail = nextNode;
    }
    this.mappedPairs.delete(key); // remove from hashmap
  }

  /**
  * **********
  * @private
  * @method   addNodeToLinkedList(node) {
  * **********
  */
  addNodeToLinkedList(key) { // HACK this node has to be in the hashmap before you can add it to the linkedlist
    const node = this.mappedPairs.get(key);
    const oldHead = this.head;
    const oldTail = this.tail;

    if (this.head === undefined) {
      console.log('initializing');
      this.tail = node;
      this.head = node;
    } else {
      // node is inserted at the head position.
      oldHead.next = node;
      node.prev = oldHead;
      this.head = node;
    }
    if (this.mappedPairs.size > this.maxCacheSize) {
      console.log('size exceeded, deleting tail', this.tail.key);
      this.removeNodeFromLinkedList(oldTail.key);
      this.mappedPairs.delete(oldTail.key); // remove from hashmap
    }
  }
}


module.exports = LRUCache;
