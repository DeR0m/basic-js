const { NotImplementedError } = require('../lib');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }

  let skipPrev = false;
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    const el = arr[i];
    const isCommand = typeof el === 'string' && el.startsWith('--');

    if (!isCommand) {
      result.push(el);
      skipPrev = false;
      continue;
    }

    switch (el) {
      case '--double-next': {
        const next = arr[i + 1];
        const nextIsCommand = typeof next === 'string' && next.startsWith('--');
        if (next !== undefined && !nextIsCommand) {
          result.push(next);
        }
        skipPrev = false;
        break;
      }
      case '--double-prev': {
        if (result.length > 0 && !skipPrev) {
          result.push(result[result.length - 1]);
        }
        skipPrev = false;
        break;
      }
      case '--discard-next': {
        i += 1;
        skipPrev = true;
        break;
      }
      case '--discard-prev': {
        if (result.length > 0 && !skipPrev) {
          result.pop();
        }
        skipPrev = false;
        break;
      }
      default: {
        break;
      }
    }
  }

  return result;
}

module.exports = {
  transform
};
