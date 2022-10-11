const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  //  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  if (!Array.isArray(arr))
    throw new Error("'arr' parameter must be an instance of the Array!");

  const returnArr = arr.slice();
  const PREV_DELETE = "p_del";

  const transforms = {
    "--discard-next": (id) => {
      if (id + 1 in returnArr) returnArr.splice(id + 1, 1, PREV_DELETE);
      returnArr.splice(id, 1);
    },
    "--discard-prev": (id) => {
      if (id - 1 in returnArr && returnArr[id - 1] !== PREV_DELETE)
        returnArr.splice(id - 1, 2);
      else returnArr.splice(id, 1);
    },
    "--double-next": (id) => {
      if (id + 1 in returnArr) returnArr.splice(id + 1, 0, returnArr[id + 1]);
      returnArr.splice(id, 1);
    },
    "--double-prev": (id) => {
      if (id - 1 in returnArr && returnArr[id - 1] !== PREV_DELETE)
        returnArr.splice(id, 1, returnArr[id - 1]);
      else returnArr.splice(id, 1);
    },
  };

  for (let i = 0; i < returnArr.length; i++) {
    if (transforms.hasOwnProperty(returnArr[i])) transforms[returnArr[i]](i);
  }
  return returnArr.filter((item) => item !== PREV_DELETE);
}
module.exports = {
  transform,
};
