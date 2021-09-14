import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement chainMaker object according to task description
 * 
 */
export default {
  result: [],

  getLength() {
    return this.result.length;
  },

  addLink(value = '') {
    this.result.push(value);
    return this;
  },

  removeLink(position) {
    if (Number.isInteger(position) == false || position < 1 || position > this.result.length - 1) {
      this.result = [];
      throw new Error('You can\'t remove incorrect link!');
    }
    this.result.splice(position - 1, 1);
    return this;
  },

  reverseChain() {
    this.result.reverse();
    return this;
  },

  finishChain() {
    let chain = '';
    if (this.result.length > 0) {
      chain += `( ${this.result[0]} )`;
    }
    if (this.result.length > 1) {
      for (let i = 1; i < this.result.length; i++) {
        chain += `~~( ${this.result[i]} )`;
      }
    }
    this.result = [];
    return chain;
  }
};
