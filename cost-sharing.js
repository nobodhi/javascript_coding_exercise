const _ = require('lodash');
// const BigNumber = require('bignumber.js'); 

/**
 TODO: this module should pass the tests in /test/test.js. A naive solution is included below.

  * @example
  shareCost(distribution, balances)
  # => [{
    from: "seth",
    to: "amy",
    amount: 2
  },{
    from: "seth",
    to: "john",
    amount: 3
  }]
*/
function shareCost(distribution, balances) {
  // set up variables for the two users, the total balances and the transfer instructions.
  const instructions = [];
  let users = [];

  // create the users array
  Object.keys(distribution).forEach((key) => {
    const u = { name: key, fraction: distribution[key] };
    users.push(u);
  });

  // append the users balance and fractional percent
  Object.keys(balances).forEach((key) => {
    const u = _.find(users, { name: key });
    u.balance = balances[key];
    // HACK. BigNumber has problems. you can pass (1/2) but neither (1/3) nor ('1/2') is allowed:
    // const p = new BigNumber(u.fraction.split('/')[0]/u.fraction.split('/')[1]);
    // error: new BigNumber() number type has more than 15 significant digits: 0.3333333333333333
    u.percent = u.fraction.split('/')[0] / u.fraction.split('/')[1];
  });

  // cf ES6 reduce
  const balance = _.sumBy(users, (u) => { return u.balance; });
  let offset; // this is the imbalance pending, expressed as an offset from zero.

  // calculate the offset for each user based on their balance and their target percentage
  Object.keys(users).forEach((key) => {
    users[key].target = (balance * users[key].percent);
    users[key].offset = users[key].balance - users[key].target;
  });

  offset = _.sumBy(users, (u) => { return Math.abs(u.offset); }); // if we get back to 0 we're done.

  // **********************
  // algo: loop until all offsets are zero or remain unchanged (offsets<2).
  // find the person with the greatest surplus.
  // find the person with the greatest deficit.
  // give the neediest person as much as possible.
  // loop.
  // **********************
  do {
    // the donor has the largest offset.
    users = _.sortBy(users, 'offset'); 
    const user1 = users[users.length - 1];
    // the recipient has the greatest negative offset
    const user2 = _.chain(users).filter(u => u.offset < 0).first().value();

    // consruct the xfer instructions
    const i = {};
    i.from = user1.name;
    i.to = user2.name;
    i.amount = user1.offset > Math.abs(user2.offset) ? Math.abs(user2.offset) : user1.offset;
    instructions.push(i);

    // adjust balances and offsets
    user1.balance -= i.amount;
    user2.balance += i.amount;
    user1.offset -= i.amount;
    user2.offset += i.amount;

    // re-compute total offset
    offset = _.sumBy(users, (u) => { return Math.abs(u.offset); });

  }
  while (offset >= 2); // HACK. 2 is the minimum solveable offset if units are integers.
  console.log(instructions);
  return (instructions); // return the topmost transfer instructions
}

module.exports = shareCost;
