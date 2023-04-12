const { NotImplementedError } = require('../extensions/index.js');

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
  let encodedStr = '';

  // Loop through each character in the string and count consecutive characters
  let count = 1;
  for (let i = 1; i <= str.length; i++) {
    if (i === str.length || str[i] !== str[i-1]) {
      encodedStr += (count > 1 ? count : '') + str[i-1];
      count = 1;
    } else {
      count++;
    }
  }

  return encodedStr;
}

module.exports = {
  encodeLine
};
