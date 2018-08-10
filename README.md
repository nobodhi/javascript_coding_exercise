# Javascript Coding Exercises

## Intro

Following are some fun puzzles and answers I've come across while interviewing and studying for Javascript related interviews, as well as some classical problems from **Cracking the Coding Interview**. The interview questions range from whiteboard exercises to 4-hour projects.

The problems are not described in great depth here. Instead, every problem is accompanied by a test script, and the challenge is to get the test script to pass. This is the principle behind **Document First, Test Driven Development**. All the requirements are found in the test case, and the developer's only job is to get the tests to pass.

Tests will run in either lab/code or mocha/chai.



# Coding Projects


## Find Pairs

In this exercise we are given a list of lists of music titles (corresponding to titles that users have reviewed) and asked to find all pairs of titles that occur within these lists more than N times. E.g., in the following example:

X, Y, Z  
X, Z  

The pairs (X, Y) and (Y, Z) occur once, and the pair (X, Z) occurs twice. The test is [test/pairs-test.js](test/pairs-test.js) and a sample data file is at [data/input.txt](data/input.txt). A naive, vanilla JS solution is here: [find-pairs.js](find-pairs.js).

#### Solution

This can be looked at as an SQL or MapReduce problem in which we first map the inputs into key-value pairs and then reduce them into a solution. We first map the users, titles, and user-title pairs. We then sort by title and loop through each title's users, querying for all pairs.


## Cost Sharing

In this project, the developer is asked to design a backend function (module) for a cost sharing application. In this project users will provide instructions on how to split up a bill (or distribute funds) among a group of people, and the developer has to write a function that will accept these instructions and return the correct redistribution of balances.

The developer is given a test harness at [test/costsharing-test.js](test/costsharing-test.js). The tests run from the command line:

`npm run costsharing-test`

The test calls a module, passes it the current balances and desired distribution, and expects a set of JSON 'instructions' describing how to redistribute the balances. For instance, given the following inputs:

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

All the developer is given to go on, is that the test has to pass. A naive solution is included in the code at [cost-sharing.js](cost-sharing.js).

#### Solution

This is a fun example of a back-end coding challenge in Javascript that also demonstrates the dilemmas a developer faces when defending a multi-hour project like this. Javascript projects are a universe - when should you begin to stop, and step away from a solution?

The naive answer simply appeals to the principles of **Document First, Test Driven Development**. While there may be innumerable ways in which the solution can be improved, the tests are passing and therefore the code is complete.


# Cracking the Coding Interview

This section includes problems and solutions from the section on data structures along with tests. The string tests are located in [test/string-test.js](test/string-test.js) and the solution is in [string-compare.js](string-compare.js).


## Is Unique

(1.1) Write a function that determines if all the characters in a string are unique. The module should simply return true or false. For example:

>stringCompare.isUnique('123456'); // returns true  
>stringCompare.isUnique('123455'); // returns false  

#### Solution

We can approach this iteratively using a *for* loop, or in a functional style using ES6 array functions. A functional solution is included.


## Check Permutation

(1.2) Write a function/module that checks if two strings are permutations of each other.

### Solution

The answer depends on what you want to do about whitespace and capitalization. Regardless whether we are concerned with whitespace or capitalization, in the general case a naive solution simply sorts the characters into two string arrays and checks whether they are the same.


## Palindrome Permutation

(1.4) Determine if a string is a permutation of a palindrome. For instance, 'aabb' is a permutation of 'Abba', which is a palindrome.

#### Solution

We want to find whether the string can be permuted such that it produces a palindrome. Proceeding from the solution in [Check Permutation](#check-permutation), the solution hinges on the symmetry of the data structure. Whether there are an even number of characters or an odd number of characters, a palindrome arrangement will be symmetric about the center, with each paired character having a number of occurrences equal to a multiple of 2.


## One Edit Apart

(1.5) Determine if two strings are one edit apart, i.e. a single character edit will transform one string into the other. E.g.:
  
>oneEdit('pale', 'bale'); // true  
>oneEdit('pale', 'ball'); // false  

In this case, the strings are said to have a [Levenshtein distance](https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/string/levenshtein-distance) = 1.

#### Solution

The types of changes in a stateless system like a database or a REST API are *insert, update and delete*. We can model string editing using this pattern. In the insert/delete case the strings will have different length, plus or minus one, but will be otherwise identical. In the update case the strings will have the same length and be otherwise identical except for a single character difference. We can therefore use the same singleton pattern as we used in the [Palindrome Permutation](#palindrome-permutation), checking for changes in any character element and allowing one and only one change.



## LRU Cache

(16.25) Design a caching mechanism for web lookups that will map two values, e.g. a street address and a sales tax rate. Assume the two values are strings, and the cache has a maximum size and starts empty. When the maximum size is reached, the cache should begin deleting the least recently used entries in the cache.

#### Solution

This problem is solveable in O(1) time complexity and O(n) space complexity. The trick is two use two data structures, a doubly linked list and a hashmap. When a user performs a lookup, the key they enter is searched on in the hashmap to find a node in the linked list, which contans the key-value pair. The linked list also keeps the nodes in order, so that the most recently used is at the head of the list and the least recently used at the tail.

The test is [test/lru-test.js](test/lru-test.js) and a vanilla JS solution using ES6 pseudo-classes is here: [lru-cache-es6.js](lru-cache-es6.js).


# Common Problems

Here are a few generic problems one may frequently encounter in a coding interview.


## Fibonacci Series

In this exercise the test is located in [test/fib-test.js](test/fib-test.js). The fibonacci module must return the Fibonacci sequence to N+1 places for any given N. The series is checked against the formula

`Sum(F(n)) = F(n+2)-1`

#### Solution

Fibonacci can be solved iteratively or recursively. In the latter case, it's important to make sure you're not repeating work. The solution in [fibonacci.js](fibonacci.js) addresses this using a global variable inside the module. This is known as 'memoization'.
