const { NotImplementedError } = require('../extensions/index.js');

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
  let outcome = {};
  const reverseDomains = [];
  for (let i = 0; i < domains.length; i++) {
    reverseDomains.push(domains[i].split('.').reverse());
  }
  for (let i = 0; i < reverseDomains.length; i++) {
    let domain = '';
    for (let j = 0; j < reverseDomains[i].length; j++) {
      domain += '.' + reverseDomains[i][j];
      if (outcome[domain]) {
        outcome[domain]++;
      } else {
        outcome[domain] = 1;
      }
    }
  }
  return outcome;  
}

module.exports = {
  getDNSStats
};
