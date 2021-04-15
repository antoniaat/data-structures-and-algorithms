/* eslint-disable no-plusplus */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */
/* eslint-disable class-methods-use-this */
/* eslint-disable max-classes-per-file */
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.tail = this.head = null;
    this.length = 0;
  }

  push(value) {
    const node = new Node(value);
    this.length++;

    if (!this.head) {
      this.head = node;
    } else {
      this.tail.next = node;
    }

    this.tail = node;
  }

  pop() {
    if (!this.head) return null;

    if (this.head === this.tail) {
      const node = this.head;
      this.head = this.tail = null;

      return node.value;
    }

    const penultimate = this._find(null,
      (value, nodeValue, i, current) => current.next === this.tail);
    const ans = penultimate.next.value;
    penultimate.next = null;
    this.tail = penultimate;
    this.length--;

    return ans;
  }

  _find(value, test = this.test) {
    let current = this.head;
    let i = 0;

    while (current) {
      if (test(value, current.value, i, current)) {
        return current;
      }

      current = current.next;
      i++;
    }

    return null;
  }

  get(index) {
    const node = this._find(index, this.testIndex);

    if (!node) return null;

    return node.value;
  }

  delete(index) {
    if (index === 0) {
      const { head } = this;

      if (head) {
        this.head = head.next;
      } else {
        this.head = null;
      }

      this.length--;

      return head.value;
    }

    const node = this._find(index - 1, this.testIndex);
    const excise = node.next;

    if (!excise) return null;

    node.next = excise.next;

    if (!node.next.next) this.tail = node.next;

    this.length--;

    return excise.value;
  }

  test(search, nodeValue) {
    return search === nodeValue;
  }

  testIndex(search, __, i) {
    return search === i;
  }

  serialize() {
    const ans = [];
    let current = this.head;

    if (!current) return ans;

    while (current) {
      ans.push(current.value);
      current = current.next;
    }

    return ans;
  }
}

const test = new LinkedList();
test.push(2);
test.push(32);
test.push(23);
test.push(69);
test.pop(69);

console.log(test);
