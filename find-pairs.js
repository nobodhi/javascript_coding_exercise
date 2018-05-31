/**
This is a naive, pure JS solution to "Popular Music" problem.
We load the data, then convert it to a list of all pairs, sorted by title and then by user.
We then compare each title's users to the remaining 'working' data, finding all pairs and 
removing each title as we loop.
Finally we sort and count the pairs and filter them.
*/
// read the file synchronously
const fs = require('fs');

const text = fs.readFileSync('./data/input.txt').toString('utf-8');
const data = text.split('\n');
const min = 50; // the minimum number of pairs we will include in final results.

console.log('records loaded:', data.length);

let work_table = []; // [user, title] records we haven't looked at yet
let current_titles = []; // [user, title] records we are currently working on
let this_title = '';

let pairs = []; // raw list of every unique [t1, t2] pair found
let pair_counts = []; // pairs with counts: [[t1, t2], count]
let final = []; // counts filtered by user-defined "min" value.

// populate the working data by assigning an arbitrary id to each user
// and finding all the [user, title] pairs.
data.forEach((row, index) => {
  const titles = row.split(',');
  titles.forEach((title) => {
    work_table.push([index,title]);
  });
});

// sort the working table by title and user
work_table = work_table.sort(function(a,b){
  val=0;
  if(a[1] != b[1]) val = a[1] > b[1] ? 1 : -1; // by title
  else if(a[0] != b[0]) val = a[0] > b[0] ? 1 : -1; // by user
  return val;
});

// process one chunk of titles at a time
do {
  this_title = work_table[0][1];
  console.log(this_title);
  
  // for every title, find all the user pairs. 
  // then remove that title from the working table.
  current_titles = work_table.filter((item) => {
    return item[1] === this_title ;
  });
  work_table.splice(0, current_titles.length);
  // OUTER
  current_titles.forEach((user) => {
    // for each user who is associated with this title
    var counter = 0;
    // INNER
    work_table.forEach((title) => {
      // find all the matching pairs remaining in the work table
      if (title[0] === user[0]) {
        // console.log('matched title ', title[1], 'to title ', this_title, 'on user', user[0]);
        pairs.push([this_title, title[1]]); // raw list of all pairs
      }
    });
  });
}
while (work_table.length > 0);

// sorting may be unnecessary but helps in testing. TODO.
pairs = pairs.sort();
// console.log(pairs);

// First we count each pair.
pair_counts = pairs.reduce((acc, val) => {
  acc[val] = acc[val] === undefined ? 1 : acc[val] += 1;
  return acc;
}, {});
// console.log(pair_counts);

// Next, we filter them by the user defined "min" value. TODO combine these steps?
Object.keys(pair_counts).forEach((key) => {
  const u = { pair: key, count: pair_counts[key] };
  // console.log(u);
  if (u.count >= min) final.push(u);
});

// these are the pairs that occur at least "min" times.
console.log(final);
