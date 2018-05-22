/**
Common string compare interview questions written in JS.

/**
 * @function init
 * @param {string} e
 * @example
 * stringCompare.containsUnique('asdfghjkl;');
 */
exports.containsUnique = (e) => {
  // are all the characters in the string unique? assume it's an enumerable character set
  let charsArr = [];
  charsArr = e.split('');
  let result = true;
  charsArr = charsArr.reduce((acc, val) => {
    acc[val] = acc[val] === undefined ? 1 : acc[val] += 1;
    if (acc[val] > 1) result = false;
    return acc;
  }, {});
  console.log(charsArr);
  return result;
};

// TODO
exports.palindrome = (e) => {
  return e;
};
