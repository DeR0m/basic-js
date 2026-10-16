const { NotImplementedError } = require('../lib');

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  links: [],

  getLength() {
    return this.links.length;
  },
  addLink(value) {
    this.links.push(String(value));
    return this;
  },
  removeLink(position) {
    if (!Number.isInteger(position) || position < 1 || position > this.links.length) {
      this.links.length = 0;
      throw new Error("You can't remove incorrect link!");
    }
    this.links.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.links.reverse();
    return this;
  },
  finishChain() {
    const str = this.links.map(x => `( ${x} )`).join('~~');
    this.links.length = 0;
    return str;
  },
};

module.exports = {
  chainMaker,
};
