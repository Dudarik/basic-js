const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement chainMaker object according to task description
 *
 */
 const chainMaker = {
  store: [],
  toString(value) {
    if (arguments.length === 0) return "( )";
    switch (value) {
      case null:
        return "( null )";
      case undefined:
        return "( undefined )";
      case Infinity:
        return "( Infinity )";
      case false:
        return "( false )";

      default:
        return `( ${String(value)} )`;
    }
  },

  getLength() {
    return this.store.length
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  },
  addLink(value) {
    // console.log(value);

    this.store.push(this.toString(value));
    return this;
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  },
  removeLink(position) {
    try {
      // debugger;
      if (!(position - 1 in this.store))
        throw new Error("You can't remove incorrect link!");
    } catch (error) {
      this.store = [];
      throw error;
    }

    this.store.splice(position - 1, 1);
    return this;
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  },
  reverseChain() {
    this.store.reverse();
    return this;
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  },
  finishChain() {
    const retStore = this.store.slice();
    this.store = [];
    return retStore.join("~~");
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  },
};
module.exports = {
  chainMaker,
};
