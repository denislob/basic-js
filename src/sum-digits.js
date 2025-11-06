const { NotImplementedError } = require('../lib');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  let nString = n.toString();
  const len = nString.length;
  let sum = 0;
  for (let i = 0; i < len; i++) {
    sum += Number(nString[i]);
  }
  if (sum.toString().length === 1) {
    return sum;
  }
  n = sum;
  return getSumOfDigits(n);
}

module.exports = {
  getSumOfDigits
};
