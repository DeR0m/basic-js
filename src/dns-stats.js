const { NotImplementedError } = require('../lib');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const stats = {};
  domains.forEach((el) => {
    const parts = el.split('.');
    let currentKey = '';
    for (let i = parts.length - 1; i >= 0; i -= 1) {
      currentKey = currentKey + '.' + parts[i];
      stats[currentKey] = (stats[currentKey] || 0) + 1;
    }

  });
  return stats;
}

module.exports = {
  getDNSStats
};
