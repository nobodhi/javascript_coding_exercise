const chai = require('chai');
const shareCost = require('../cost-sharing.js');

const expect = chai.expect;

// given the current balances and a target distribution (e.g. splitting a tab),
// return a set of 'transfer instructions' explaining how to redistribute funds
// among a group.
describe('Cost Sharing Instructions', () => {
  it('should generate the correct transfer instructions for a one to any redistribution', (done) => {
    const distribution = {
      seth: '1/3',
      amy: '1/3',
      john: '1/3', // TODO comma-dangle (?)
    };
    const balances = {
      seth: 9,
      amy: 2,
      john: 1,
    };
    const expected = [{
      from: 'seth',
      to: 'amy',
      amount: 2,
    },
    {
      from: 'seth',
      to: 'john',
      amount: 3,
    }];

    const result = shareCost(distribution, balances);

    expect(result.length).to.equal(2);

    // result array can be in any order, so check transfer instructions are present in the result
    expect(expected).to.deep.include(result[0]);
    expect(expected).to.deep.include(result[1]);

    done();
  });

  it('should generate the correct transfer instructions for an any to one redistribution', (done) => {
    const distribution = {
      seth: '1/3',
      amy: '1/3',
      john: '1/3',
    };
    const balances = {
      seth: 5,
      amy: 2,
      john: 5,
    };
    const expected = [{
      from: 'seth',
      to: 'amy',
      amount: 1,
    }, {
      from: 'john',
      to: 'amy',
      amount: 1,
    }];

    const result = shareCost(distribution, balances);

    expect(result.length).to.equal(2);

    // result array can be in any order, so check transfer instructions are present in the result
    expect(expected).to.deep.include(result[0]);
    expect(expected).to.deep.include(result[1]);

    done();
  });

  it('should generate the correct transfer instructions for an any to any redistribution', (done) => {
    const distribution = {
      seth: '1/3',
      amy: '1/6',
      john: '1/3',
      sue: '1/6',
    };
    const balances = {
      seth: 0,
      amy: 4,
      john: 3,
      sue: 5,
    };
    const expected = [{
      from: 'sue',
      to: 'seth',
      amount: 3,
    }, {
      from: 'amy',
      to: 'john',
      amount: 1,
    }, {
      from: 'amy',
      to: 'seth',
      amount: 1,
    }];

    const result = shareCost(distribution, balances);

    expect(result.length).to.equal(3);

    // result array can be in any order, so check transfer instructions are present in the result
    expect(expected).to.deep.include(result[0]);
    expect(expected).to.deep.include(result[1]);
    expect(expected).to.deep.include(result[2]);

    done();
  });
});
