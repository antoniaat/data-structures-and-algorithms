/* eslint-disable no-underscore-dangle */
/* eslint-disable no-plusplus */
class ArrayList {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  push(value) {
    this.data[this.length] = value;
    this.length++;
  }

  pop() {
    return this.delete(this.length - 1);
  }

  get(index) {
    return this.data[index];
  }

  delete(index) {
    const el = this.data[index];
    this._collapseTo(index);

    return el;
  }

  _collapseTo(index) {
    for (let i = index; index < this.length; i++) {
      this.data[i] = this.data[i + 1];
    }

    delete this.data[this.length - 1];
    this.length--;
  }
}

const myArr = new ArrayList();
myArr.push(2);
myArr.push(3);
myArr.push(5);

myArr.pop();

console.log(myArr);
