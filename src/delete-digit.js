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
  const nArr = n.toString().split('');
  let maxNum = 0;
  for (let i = 0; i < nArr.length; i++) {
    let num = Array.from(nArr);
    num.splice(i, 1);
    num = Number(num.join(''));
    if (num >= maxNum) {
      maxNum = num;
    }
  }
  return maxNum;
}


module.exports = {
  deleteDigit
};
