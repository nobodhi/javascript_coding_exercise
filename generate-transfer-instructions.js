const _ = require('lodash') // Feel free to use
const BigNumber = require('bignumber.js') // Feel free to use

/**
  * @example
    generateTransferInstructions(distribution, balances)
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
function generateTransferInstructions(distribution, balances){
  var instructions = [];
  var users = []; 

  // create the users array
  Object.keys(distribution).forEach(function(key) {
    var u = {name: key, fraction: distribution[key]};
    users.push(u);
  });

  // append the users balance and fractional percent
  Object.keys(balances).forEach(function(key) {
    var u = _.find(users, {name:key});
    u.balance = balances[key];
    u.percent = eval(u.fraction);
  });

  // use this to immediately sum a column.
  var balance = _.sumBy(users, function(u) { return u.balance; }); 

  // calculate the offset for each user based on their balance and their target percentage
  Object.keys(users).forEach(function(key) {
    users[key].target = (balance * users[key].percent);
    users[key].offset = users[key].balance - users[key].target;
  });

  var offset = _.sumBy(users, function(u) { return Math.abs(u.offset); });  // if we get back to 0 we're done.

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
    var user1 = users[users.length - 1];
    
    // the recipient has the greatest negative offset
    var user2 = _.chain(users).filter(u => u.offset < 0).first().value(); 

    // consruct the xfer insructions
    var i = {};
    i.from = user1.name;
    i.to = user2.name;
    i.amount = user1.offset > Math.abs(user2.offset) ? Math.abs(user2.offset) : user1.offset;
    instructions.push(i);

    // adjust balances and offsets
    user1.balance = user1.balance - i.amount;
    user2.balance = user2.balance + i.amount;
    user1.offset = user1.offset - i.amount;
    user2.offset = user2.offset + i.amount;

    // re-compute total offset
    offset = _.sumBy(users, function(u) { return Math.abs(u.offset); });

  }
  while (offset >=2); // 2 is the minimum solveable offset if units are integers.

  console.log(instructions);
  
  return(instructions); // return the topmost transfer instructions 
}

module.exports = generateTransferInstructions;