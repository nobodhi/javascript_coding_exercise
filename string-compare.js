/** Strings related interview questions written in JS. Test located in test/string-test.js.
 * @function containsUnique
 * @param {string} e
 * @returns boolean
 * @example
 * stringCompare.containsUnique('123455'); // false
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

/** Determine whether two strings are permuations of one another.
 * @function isPermutation
 * @param {string} s1
 * @param {string} s2
 * @example
 * stringCompare.isPermutation('I am Lord Voldemort', 'Tom Marvolo Riddle ');
 */
exports.isPermutation = (s1, s2) => {
  const s1Arr = s1.split('').sort();
  const s2Arr = s2.split('').sort();
  if (s1Arr.length !== s2Arr.length) return false;
  // loop thru one of the arrays and check element by element
  for (let i = 0; i < s1Arr.length; i += 1) {
    if (s1Arr[i] !== s2Arr[i]) return false;
  }
  return true;
};

/** Determine if a string is a permutation of a palindrome.
 * @function isPalindromePermutation
 * @param {string} s
 * @example
 * stringCompare.isPalindromePermutation('aabb');
 */
exports.isPalindromePermutation = (e) => {
  // if there are an even number of characters then all counts will ba a multiple of 2.
  // otherwise, one of them will have a count of 1.
  let charsArr = [];
  let charCounts = {};
  charsArr = e.split('');
  let result = true;

  // singleton
  charCounts = charsArr.reduce((acc, val) => {
    acc[val] = acc[val] === undefined ? 1 : acc[val] += 1;
    return acc;
  }, {});
  console.log(charCounts);

  const isEven = (charCounts.length % 2 === 0);
  let foundOdd = false;

  Object.keys(charCounts).forEach((key) => {
    if (charCounts[key] % 2 === 1) {
      // we found an odd number
      if (!isEven && foundOdd) result = false; // if array length is odd, ONE odd result is allowed
      if (isEven) result = false; // if array length is even, NO odd results are allowed
      foundOdd = true;
    }
    console.log(key, foundOdd, result);
  });
  return result;
};

/** Determine if two strings are a single edit away, i.e. Levenshtein distance <= 1.
 * @function oneEdit
 * @param {string} s1
 * @param {string} s2
 * @example
 * oneEdit('pale', 'bale'); // true
 * oneEdit('pale', 'ball'); // false
 */
exports.oneEdit = (s1, s2) => {
  const m = s1.toString().length;
  const n = s2.toString().length;
  let editCount = 0;
  let i = 0;
  let j = 0;
  if (Math.abs(m - n) > 1) {
    return false;
  }
  do {
    const char1 = s1.charAt(i);
    const char2 = s2.charAt(j);
    console.log(char1, char2);
    // if we locate a character difference, allow up to one edit. if the strings are different
    // lengths, attempt to re-align them for the next loop.
    if (char1 !== char2) {
      editCount += 1;
      if (editCount > 1) return false;
      if (m >= n) i += 1;
      if (n >= m) j += 1;
    } else {
      i += 1;
      j += 1;
    }
  } while (i < m && j < n);

  return true;
};
