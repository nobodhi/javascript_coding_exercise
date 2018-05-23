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

/**
 * @function isPalindromePermutation
 * @param {string} s1
 * @param {string} s2
 * @example
 * stringCompare.isPalindromePermutation('I am Lord Voldemort', 'Tom Marvolo Riddle ');
 */
exports.isPalindromePermutation = (e) => {
  // if there are an even number of characters then all of them will have count of 2
  // otherwise, one of them will have a count of 1. we'll just do this intuitively in a
  // series of loops, for O(n).
  let charsArr = [];
  let charCounts = {};
  charsArr = e.split('');
  let result = true;

  // clever short circuit. we look for an odd number in the count value. if we find
  // more than one of them we return false. this relies on knowing whether we've
  // found the first one. to do that, we toggle our boolean such that any subsequent
  // hit will trigger an immediate return. otherwise, return success.
  charCounts = charsArr.reduce((acc, val) => {
    acc[val] = acc[val] === undefined ? 1 : acc[val] += 1;
    return acc;
  }, {});
  console.log(charCounts);

  const isEven = (charCounts.length % 2 === 0);
  let foundOdd = false;

  // TODO Object.keys doesn't let you break and the object is not iterable. 
  // can it be converted back to an array? is there a better way to implement a dictionary?
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
