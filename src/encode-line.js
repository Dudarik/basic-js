const { NotImplementedError } = require("../extensions/index.js");

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
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  if (!str) return "";

  const tArr = [...str];

  let res = [];
  let retStr = "";

  for (let i = 0; i < tArr.length; i++) {
    if (tArr[i + 1] && tArr[i] === tArr[i + 1]) {
      res.push(tArr[i]);
    } else if (tArr[i + 1] && tArr[i] !== tArr[i + 1]) {
      res.push(tArr[i]);
      retStr += (res.length > 1 ? res.length : "") + res[0];
      res = [];
    } else if (!tArr[i + 1]) {
      res.push(tArr[i]);
      retStr += (res.length > 1 ? res.length : "") + res[0];
    }
  }
  return retStr;
}

module.exports = {
  encodeLine,
};
