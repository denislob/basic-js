const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  link: [],
  getLength() {
    return this.link.length;
  },
  addLink(value) {
    if (value === undefined) {
      this.link.push('( )');
    } else {
      this.link.push(`( ${value} )`);
    }
    return this;    
  },
  removeLink(position) {
    if (isNaN(position) || position < 1 || position > this.link.length) {
      this.link = [];
      throw Error ("You can't remove incorrect link!");
    } else {
      this.link.splice(position - 1, 1);
      return this;
    }
  },
  reverseChain() {
    this.link.reverse();
    return this;
  },
  finishChain() {
    const finishedСhain = this.link.join('~~');
    this.link = [];
    return finishedСhain;
  }
};

module.exports = {
  chainMaker
};
