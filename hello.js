/**
interview questions written in JS. test located in test/hello-test.js.
 * @function hello
 * @param {string} e
 * @returns string
 * @example
 * sayHello.shortGreeting('joe'); // 'hello joe'
*/
const greeting1 = 'hello ';
const greeting2 = 'well hello there ';

exports.shortGreeting = (e) => {
  const newGreeting = greeting1 + e;
  return newGreeting;
};

exports.longGreeting = (e) => {
  const newGreeting = greeting2 + e;
  return newGreeting;
};
