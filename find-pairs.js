/** Find the pairs of music titles in a list of lists. test located in test/pairs-test.js
 * @function findPairs
 * @param {number} min
 * @returns string
 * @example
 * findPairs(2); // returns all pairs that occur at least 2 times.
*/
const fs = require('fs');

module.exports = (min) => {
  const text = fs.readFileSync('./data/input.txt').toString('utf-8');
  const data = text.split('\n');
  // console.log('records loaded:', data.length);

  let workTable = [];
  let currentTitles = [];
  let thisTitle = '';
  let pairs = [];
  let pairCounts = [];
  const final = [];

  // assign an arbitrary userId and find all the [user, title] pairs.
  data.forEach((row, index) => {
    const titles = row.split(',');
    titles.forEach((title) => {
      workTable.push([index, title]);
    });
  });

  // sort the working table by title and user
  workTable = workTable.sort((a, b) => {
    let val = 0;
    if (a[1] !== b[1]) val = a[1] > b[1] ? 1 : -1; // by title
    else if (a[0] !== b[0]) val = a[0] > b[0] ? 1 : -1; // by user
    return val;
  });

  /* eslint-disable no-loop-func */
  do {
    thisTitle = workTable[0][1];
    // console.log(thisTitle);

    // for every title, find all the user pairs. then remove that title from the working table.
    currentTitles = workTable.filter(item => item[1] === thisTitle);

    workTable.splice(0, currentTitles.length);
    currentTitles.forEach((user) => {
      // for each user who is associated with this title
      workTable.forEach((title) => {
        // find all the matching pairs remaining in the work table
        if (title[0] === user[0]) {
          pairs.push([thisTitle, title[1]]);
        }
      });
    });
  }
  while (workTable.length > 0);
  /* eslint-enable no-loop-func */

  pairs = pairs.sort();
  console.log(pairs);

  // First we count each pair.
  pairCounts = pairs.reduce((acc, val) => {
    acc[val] = acc[val] === undefined ? 1 : acc[val] += 1;
    return acc;
  }, []);
  // console.log(pairCounts);

  // Next, we filter them by the user defined "min" value.
  Object.keys(pairCounts).forEach((key) => {
    const u = [key, pairCounts[key] ];
    if (pairCounts[key] >= min) final.push(u);
  });

  // these are the pairs that occur at least "min" times.
  console.log(final);
  return final;
};
