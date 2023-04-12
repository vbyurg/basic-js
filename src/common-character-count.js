const {
  NotImplementedError
} = require('../extensions/index.js');

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
  const s1Chars = {};
  let commonChars = 0;

  for (let i = 0; i < s1.length; i++) {
    if (s1Chars[s1[i]]) {
      s1Chars[s1[i]]++;
    } else {
      s1Chars[s1[i]] = 1;
    }
  }


  for (let i = 0; i < s2.length; i++) {
    if (s1Chars[s2[i]] && s1Chars[s2[i]] > 0) {
      commonChars++;
      s1Chars[s2[i]]--;
    }
  }

  return commonChars;
}

module.exports = {
  getCommonCharacterCount
};