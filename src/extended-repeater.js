const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(
  str,
  {
    repeatTimes = 0,
    separator = "+",
    addition = "",
    additionRepeatTimes = 0,
    additionSeparator = "|",
  } = {}
) {
  const createAddition = (addition, additionRepeatTimes, additionSeparator) => {
    // console.log(addition, String(additionRepeatTimes));
    if (addition && additionRepeatTimes) {
      const addArray = [];
      for (let k = 0; k < additionRepeatTimes; k++) {
        addArray.push(addition);
      }
      return addArray.join(additionSeparator);
    }
    return "";
  };

  if (!repeatTimes && !additionRepeatTimes && addition)
    return str + createAddition(String(addition), 1, additionSeparator);

  if (addition && repeatTimes && !additionRepeatTimes) additionRepeatTimes = 1;

  // debugger;
  if (!repeatTimes) return str;
  const result = [];
  let add = createAddition(
    String(addition),
    additionRepeatTimes,
    additionSeparator
  );

  for (let i = 0; i < repeatTimes; i++) {
    result.push(str + add);
  }
  return result.join(separator);
}

module.exports = {
  repeater,
};
