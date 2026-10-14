const { NotImplementedError } = require('../lib');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */

function getCommonCharacterCount(s1, s2) {
  const counts1 = {};
  const counts2 = {};
  let total = 0;

  for (let char of s1) {
    counts1[char] = (counts1[char] || 0) + 1;
  }
  for (let char of s2) {
    counts2[char] = (counts2[char] || 0) + 1;
  }

  Object.keys(counts1).forEach((char) => {
    if (counts2[char]) {
      total += Math.min(counts1[char], counts2[char]);
    }
  });
  return total;
}

module.exports = {
  getCommonCharacterCount
};
