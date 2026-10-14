const { NotImplementedError } = require('../lib');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let str = String(n);
  const candidates = [];

  for (let i = 0; i < str.length; i++) {
    candidates.push(Number(str.slice(0, i) + str.slice(i + 1)));
  }

  return Math.max(...candidates);
}

module.exports = {
  deleteDigit
};
