const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let outcome = '';
  let count = 1;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      count += 1;
    } else if (count === 1) {
        outcome += str[i];
      } else {
        outcome += `${count}${str[i]}`;
        count = 1;
      }
    }  
  return outcome;
}

module.exports = {
  encodeLine
};
