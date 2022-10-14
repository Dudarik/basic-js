const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  //iteration
  // calculateDepth(arr) {
  //   this.depth = 1;
  //   for (let i = 0; i < arr.length; i++) {
  //     // debugger;
  //     if (Array.isArray(arr[i])) {
  //       this.depth += 1;
  //       i--;
  //       arr = arr.flat();
  //     }
  //   }
  //   return this.depth;
  // }
  // recurcive
  calculateDepth(arr) {
    let depth = 1;

    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        arr = arr.flat();
        return (depth += this.calculateDepth(arr));
      }
    }
    return depth;
  }
}

module.exports = {
  DepthCalculator,
};
