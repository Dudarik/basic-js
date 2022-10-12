const { NotImplementedError } = require("../extensions/index.js");

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
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  const tArr = [...String(n)];
  const tObj = {};
  let max = -1;

  for (let i = 0; i < tArr.length; i++) {
    tObj[tArr[i]] ? tObj[tArr[i]].push(i) : (tObj[tArr[i]] = [i]);
  }

  const tArr2 = Array.from(Object.entries(tObj));
  for (let i = 0; i < tArr2.length; i++) {
    const cp = tArr.slice();
    cp.splice(tArr2[i][1][0], 1);
    max = Math.max(max, +cp.join(""));
  }
  return max;
}

module.exports = {
  deleteDigit,
};
