# Javascript Coding Exercises

## Intro

Following are some fun puzzles and answers I've come across while interviewing and studying for Javascript related interviews.


## Cost Sharing Exercise

This is a Node.js coding challenge I came across recently.

In this project, the developer is asked to write a function that passes the set of tests run from the command line:

`npm run test`


You can find the source for the tests in [test/test.js](test/test.js).

The test calls a module, passes it some data, and expects a set of JSON 'transfer instructions' describing how to redistribute funds between people according to ratios provided by the user (similar to a cost-sharing app). For instance, given the following inputs:

`distribution = {
  joe: '1/2',
  bob: '1/2'
}

balances = {
  joe: 5,
  bob: 1
}`

the transfer instructions would be:

`{
  from: 'joe',
  to: 'bob',
  amount: 2,
}`

All you know is that the test has to pass. A naive solution is included in the code.

### Solution

This is a fun example of a back-end coding challenge in Javascript that also demonstrates the dilemmas a developer faces when defending a multi-hour project like this. Javascript projects are a universe - when should you begin to stop, and step away from a solution?

The naive answer simply appeals to the principles of **Document First, Test Driven Development**. While there may be innumerable ways in which the solution can be improved, the tests are passing and therefore the code is complete.


## Fibonacci Series

In this exercise the test is located in [test/fib-test.js](test/fib-test.js). The fibonacci module must return the Fibonacci sequence to N+1 places for any given N. The series is checked against the formula

`Sum(F(n)) = F(n+2)-1`

### Solution

Fibonacci can be solved iteratively or recursively. In the latter case, it's important to make sure you're not repeating work. This solution handles that using a global variable inside the module. This is known as 'memoization'.


## Is Unique

This is exercise 1.1. from **Cracking the Coding Interview**. The string tests are located in [test/string-test.js](test/string-test.js). The module should return true if all the characters in a string are unique. Hints include "consider a hash table" and "assume ascii (or not)".

### Solution

Again you can approach this iteratively using a *for* loop, or in a functional style using ES6 array functions.

## Check Permutation

(Exercise 1.2) write a function/module that checks if two strings are permutations of each other.

### Solution

Regardless whether we are concerned with whitespace or capitalization, in the general case a naive solution simply sorts the two strings and checks whether they are the same.
