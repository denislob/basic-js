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
  let resMap = {};
  const reverseDoms = [];
  for (let i = 0; i < domains.length; i++) {
    reverseDoms.push(domains[i].split('.').reverse());
  }
  for (let i = 0; i < reverseDoms.length; i++) {
    let domain = '';
    for (let j = 0; j < reverseDoms[i].length; j++) {
      domain += '.' + reverseDoms[i][j];
      if (resMap[domain]) {
        resMap[domain]++;
      } else {
        resMap[domain] = 1;
      }
    }
  }
  return resMap;  
}

module.exports = {
  getDNSStats
};
