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
  const s1Map = countSymbols(s1);
  const s2Map = countSymbols(s2);
  let count = 0;
  
  for (let sym in s1Map) {
    if (s2Map[sym]) {
      count += Math.min(s1Map[sym], s2Map[sym]);
    }
  }
  return count;
}

function countSymbols(str) {
  const strMap = {};
  for (let sym of str) {
    if (strMap[sym]) {
      strMap[sym]++;
    } else {
      strMap[sym] = 1;
    }
  }
  return strMap;
}

module.exports = {
  getCommonCharacterCount
};
