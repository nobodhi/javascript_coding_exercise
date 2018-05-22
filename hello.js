/**
interview questions written in JS.
@example
//inputs and outputs
*/
const greeting1 = 'hello ';
const greeting2 = 'well hello there ';

exports.foo = (e) => {
  const newGreeting = greeting1 + e;
  return newGreeting;
};

exports.bar = (e) => {
  const newGreeting = greeting2 + e;
  return newGreeting;
};
