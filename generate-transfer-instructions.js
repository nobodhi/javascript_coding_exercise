const _ = require('lodash') // Feel free to use
const BigNumber = require('bignumber.js') // Feel free to use

/**
  * Given a set of users, a pool of funds, and a target distribution for those funds, this produces a set of instructions that sends funds between users so that the target distribution is met.
  * For example, if "Seth" has a balance of 10, "Amy" a balance of 3, and "John" a balance of "1", if the ideal ratio between them is to have 1/3 each of the total (12), Seth will have to give Amy 2 and Seth will have to give John 3 so that each of them has 4, or 33% of the total.
  *
  * @param {Object} distribution - The ideal distribution. Keys are names, values are the fraction of the total distributed to that person.
  *   @param {number} distribution.{name} - the distribution of the total that the person specified by 'name' should posess.
  * @param {Object} balances - The current balance of each person. Keys are names, values are the current balance.
  *   @param {string} balances.{name} - The current balance of the person specified by 'name.'
  * @return {Array} - an array of `instruction` Objects
  *   @return {Object} instruction
  *     @return {string} instruction.from - the name of the person giving the amount
  *     @return {string} instruction.to - the name of the person receiving the amount
  *     @return {number} instruction.amount - the amount necessary so that ratios match
  *
  * @example:
    const distribution = {
      seth: "1/3",
      amy: "1/3",
      john: "1/3"
    }
    const balances = {
      seth: 9,
      amy: 2,
      john: 1
    }
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
  while (offset >=2) // 2 is the minimum solveable offset if units are integers.

  console.log(instructions);
  
  return(instructions); // return the topmost transfer instructions 
}

module.exports = generateTransferInstructions;