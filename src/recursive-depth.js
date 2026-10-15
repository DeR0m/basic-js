const { NotImplementedError } = require('../lib');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates depth of nested array
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
  calculateDepth(arr) {
    const subArrays = arr.filter(Array.isArray);

    if (subArrays.length === 0) {
      return 1;
    }

    const depths = subArrays.map(sub => this.calculateDepth(sub));
    return 1 + Math.max(...depths);
  }
}

module.exports = {
  depthCalculator: new DepthCalculator(),
};
