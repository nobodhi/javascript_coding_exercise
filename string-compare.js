/** Strings related interview questions written in JS. Test located in test/string-test.js.
 * @function containsUnique
 * @param {string} e
 * @returns boolean
 * @example
 * stringCompare.containsUnique('123455'); // false
 */
exports.containsUnique = e => {
  // are all the characters in the string unique? assume it's an enumerable character set
  const charsArr = e.split("");
  const charCounts = {};
  charsArr.map(char => charCounts[char] = (charCounts[char]||0)+1);
  console.log(charCounts);
  for (count of Object.values(charCounts)) {
    if (count > 1)
      return false;
  }
  return true;
};

/** Determine whether two strings are permuations (anagrams) of one another.
 * @function isPermutation
 * @param {string} string1
 * @param {string} string2
 * @example
 * stringCompare.isPermutation('I am Lord Voldemort', 'Tom Marvolo Riddle ');
 */
exports.isPermutation = (string1, string2) => {
  string1 = string1.toLowerCase().replace(/\s/g, '');
  string2 = string2.toLowerCase().replace(/\s/g, '');
  const string1Arr = string1.split("").sort();
  const string2Arr = string2.split("").sort();
  console.log(string1Arr, string2Arr);
  if (string1Arr.length !== string2Arr.length) return false;
  // loop thru one of the arrays and check element by element
  for (let i = 0; i < string1Arr.length; i += 1) {
    if (string1Arr[i] !== string2Arr[i]) return false;
  }
  return true;

  // TODO. this is kind of a BS answer, you really should run a counter,
  // or possibly remove characters as they are found. 
  // also, add something in the readme about testing.

};

/** Determine if a string is a permutation of a palindrome.
 * @function isPalindromePermutation
 * @param {string} s
 * @example
 * stringCompare.isPalindromePermutation('aabb');
 */
exports.isPalindromePermutation = e => {
  // if there are an even number of characters then all counts will ba a multiple of 2.
  // otherwise, one of them will have a count of 1.
  let charsArr = [];
  let charCounts = {};
  charsArr = e.split("");
  let result = true;

  // singleton
  charCounts = charsArr.reduce((acc, val) => {
    acc[val] = acc[val] === undefined ? 1 : (acc[val] += 1);
    return acc;
  }, {});
  console.log(charCounts);

  const isEven = charCounts.length % 2 === 0;
  let foundOdd = false;

  Object.keys(charCounts).forEach(key => {
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
 * @param {string} string1
 * @param {string} string2
 * @example
 * oneEdit('pale', 'bale'); // true
 * oneEdit('pale', 'ball'); // false
 */
exports.oneEdit = (string1, string2) => {
  const len1 = string1.toString().length;
  const len2 = string2.toString().length;
  // const len1_is_longer = (len1 > len2)
  let editCount = 0;
  let index1 = 0;
  let index2 = 0;
  if (Math.abs(len1-len2) > 1) {
    console.log("Levenshtein distance > 1", string1, string2);
    return false;
  }
  
  do {
    const char1 = string1.charAt(index1);
    const char2 = string2.charAt(index2);
    console.log(char1, char2);
    // if we locate a character difference, allow up to one edit. if the strings are different
    // lengths, attempt to re-align them for the next loop.
    if (char1 !== char2) {
      if (editCount == 1) return false;
      editCount += 1;
      if (len1 >= len2) index1 += 1;
      if (len2 >= len1) index2 += 1;
    } else {
      index1 += 1;
      index2 += 1;
    }
  } while (index1 < len1 && index2 < len2);

  return true;
};
