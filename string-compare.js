/**
Common string compare interview questions written in JS.

/**
 * @function containsUnique
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

/**
 * @function isPermutation
 * @param {string} s1
 * @param {string} s2
 * @example
 * stringCompare.isPermutation('I am Lord Voldemort', 'Tom Marvolo Riddle');
 */
exports.isPermutation = (s1, s2) => {
  const s1Arr = s1.split('').sort();
  const s2Arr = s2.split('').sort();
  console.log(s1Arr);
  console.log(s2Arr);
  if (s1Arr.length !== s2Arr.length) return false;
  // loop thru one of the arrays and check element by element
  for (let i = 0; i < s1Arr.length; i += 1) {
    if (s1Arr[i] !== s2Arr[i]) return false;
  }
  return true;
};
