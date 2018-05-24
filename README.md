# Javascript Coding Exercises

## Intro

Following are some fun puzzles and answers I've come across while interviewing and studying for Javascript related interviews, as well as some classical problems from **Cracking the Coding Interview**. The interview questions range from whiteboard exercises to 4-hour projects.

The problems are not described in great depth here. Instead, every problem is accompanied by a test script, and the challenge is to get the test script to pass. This is the principle behind **Document First, Test Driven Development**. All the requirements are found in the test case, and the developer's only job is to get the tests to pass.

Tests are currently using npm modules "lab" and "code".


## Coding Projects

### Cost Sharing Exercise

In this project, the developer is asked to write a function that passes the set of tests run from the command line:

`npm run test`

You can find the source for the tests in [test/test.js](test/test.js).

The test calls a module, passes it some data, and expects a set of JSON 'instructions' describing how to redistribute funds between people according to ratios provided by the user (similar to a cost-sharing app). For instance, given the following inputs:

`distribution = {
  joe: '1/2',
  bob: '1/2'
}`

`balances = {
  joe: 5,
  bob: 1
}`

the transfer instructions would be:

`{
  from: 'joe',
  to: 'bob',
  amount: 2
}`

All you know is that the test has to pass. A naive solution is included in the code.

#### Solution

This is a fun example of a back-end coding challenge in Javascript that also demonstrates the dilemmas a developer faces when defending a multi-hour project like this. Javascript projects are a universe - when should you begin to stop, and step away from a solution?

The naive answer simply appeals to the principles of **Document First, Test Driven Development**. While there may be innumerable ways in which the solution can be improved, the tests are passing and therefore the code is complete.

## Cracking the Coding Interview

This section includes problems from the book **Cracking the Coding Interview**. The string tests are located in [test/string-.js](test/string-test.js).

### Is Unique

(1.1) Write a function that determines if all the characters in a string are unique. The module should simply return true or false. For example:

>stringCompare.isUnique('123456'); // returns true
>stringCompare.isUnique('123455'); // returns false

#### Solution

We can approach this iteratively using a *for* loop, or in a functional style using ES6 array functions. A functional solution is included in [string-compare.js](string-compare.js).

### Check Permutation

(1.2) Write a function/module that checks if two strings are permutations of each other.

#### Solution

The answer depends on what you want to do about whitespace and capitalization. Regardless whether we are concerned with whitespace or capitalization, in the general case a naive solution simply sorts the characters in the two strings and checks whether they are the same.

### Palindrome Permutation

(1.4) Determine if a string is a permutation of a palindrome. For instance, 'aabb' is a permutation of 'Abba', which is a palindrome.

#### Solution

We want to find whether the string can be permuted such that it produces a palindrome. Proceeding from the solution in [Check Permutation](#check-permutation), the solution hinges on the symmetry of the data structure. Whether there are an even number of characters or an odd number of characters, a palindrome arrangement will be symmetric about the center, with each paired character having a number of occurrences equal to a multiple of 2.

### One Away

(1.5) Determine if two strings are one edit apart, i.e. a single character edit will transform one string into the other. E.g.:
  
>oneAway('pale', 'bale'); // true  
>oneAway('pale', 'ball'); // false  

#### Solution

The types of changes in a stateless system like a database or a REST API are *insert, update and delete*. In the insert/delete case the strings will have different length, plus or minus one, but will be otherwise identical. In the update case the strings will have the same length but will be otherwise identical except for a single character difference. We can therefore use the same singleton pattern as we used in the [Palindrome Permutation](#palindrome-permutation), checking for changes in any character element and allowing one and only one change.


## Common Problems

Here are a few generic problems one may frequently encounter in a coding interview.

### Fibonacci Series

In this exercise the test is located in [test/fib-test.js](test/fib-test.js). The fibonacci module must return the Fibonacci sequence to N+1 places for any given N. The series is checked against the formula

`Sum(F(n)) = F(n+2)-1`

#### Solution

Fibonacci can be solved iteratively or recursively. In the latter case, it's important to make sure you're not repeating work. The solution in [fibonacci.js](fibonacci.js) addresses this using a global variable inside the module. This is known as 'memoization'.
