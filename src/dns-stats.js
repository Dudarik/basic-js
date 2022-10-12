const { NotImplementedError } = require("../extensions/index.js");

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
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  if (!domains.length) return {};

  const retObj = {};

  domains = domains.map((item) => item.split(".").reverse());

  const tArr = [];
  for (let i = 0; i < domains.length; i++) {
    for (let k = 0; k < domains[i].length; k++) {
      if (k > 0) tArr.push(`${tArr[k - 1]}.${domains[i][k]}`);
      else tArr.push(`.${domains[i][k]}`);
    }
  }
  tArr.forEach((item) => (retObj[item] ? retObj[item]++ : (retObj[item] = 1)));

  return retObj;
}

module.exports = {
  getDNSStats,
};
