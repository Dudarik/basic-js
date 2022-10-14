const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  for (let i = email.length - 1; i >= 0; i--) {
    if (email[i] === "@")
      return [...email].slice(i - email.length + 1, email.length).join("");
  }
}

module.exports = {
  getEmailDomain,
};
