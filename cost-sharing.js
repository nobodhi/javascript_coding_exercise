/**
 this module should pass the tests in /test/test.js. A naive solution is included below.

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
const _ = require('lodash');

function shareCost(distribution, balances) {
  const instructions = [];
  let users = [];

  Object.keys(distribution).forEach((key) => {
    const u = { name: key, fraction: distribution[key] };
    users.push(u);
  });

  Object.keys(balances).forEach((key) => {
    const u = _.find(users, { name: key });
    u.balance = balances[key];
    u.percent = u.fraction.split('/')[0] / u.fraction.split('/')[1];
  });

  const balance = _.sumBy(users, (u) => { return u.balance; });
  let offset;

  // calculate the offset for each user based on their balance and their target percentage
  Object.keys(users).forEach((key) => {
    users[key].target = (balance * users[key].percent);
    users[key].offset = users[key].balance - users[key].target;
  });

  offset = _.sumBy(users, (u) => { return Math.abs(u.offset); }); // if we get back to 0 we're done.

  /* loop:
  // find the person with the greatest surplus.
  // find the person with the greatest deficit.
  // give the neediest person as much as possible.
  */
  do {
    users = _.sortBy(users, 'offset'); 
    const user1 = users[users.length - 1];
    const user2 = _.chain(users).filter(u => u.offset < 0).first().value();

    const i = {};
    i.from = user1.name;
    i.to = user2.name;
    i.amount = user1.offset > Math.abs(user2.offset) ? Math.abs(user2.offset) : user1.offset;
    instructions.push(i);

    user1.balance -= i.amount;
    user2.balance += i.amount;
    user1.offset -= i.amount;
    user2.offset += i.amount;

    offset = _.sumBy(users, (u) => { return Math.abs(u.offset); });
  }
  while (offset >= 2);
  console.log(instructions);
  return (instructions);
}

module.exports = shareCost;
