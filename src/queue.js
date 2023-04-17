const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  getUnderlyingList() {
    return this.head;
  }

  enqueue(value) {
    let elem = new Node(value);
    if (!this.head) {
      this.head = elem;
      this.tail = elem;
    } else {
      this.tail.next = elem;
      this.tail = elem;
    }
  }

  dequeue() {
    if (!this.head) {
      return null;
    }
    let tmp;
    if (this.head.next) {
      tmp = this.head;
      this.head = this.head.next;
    } else {
      tmp = this.head;
      this.head = null;
      this.tail = null;
    }
    return tmp.value;
  }
}

module.exports = {
  Queue
};
