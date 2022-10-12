const { NotImplementedError } = require("../extensions/index.js");

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
  let count = 0;
  s1 = [...s1].sort().reverse();
  s2 = [...s2].sort().reverse();
  const s3 = Array.from(new Set(s1)).sort();
  for (let i = 0; i < s3.length; i++) {
    // debugger;
    while (s3[i] === s1[s1.length - 1] || s3[i] === s2[s2.length - 1]) {
      if (s1[s1.length - 1] === s2[s2.length - 1]) {
        count += 1;
        s1.pop();
        s2.pop();
      } else if (s1[s1.length - 1] === s3[i]) {
        s1.pop();
      } else if (s2[s2.length - 1] === s3[i]) {
        s2.pop();
      }
    }
  }
  return count;
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  getCommonCharacterCount,
};
