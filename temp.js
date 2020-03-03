const PI = 3.14;
// PI = 3.1415;
console.log(PI);

const add = a => b => a + b;
console.log(add(1)(2));

// note syntax
const obj = {
  f(m) {
    console.log(m)
  }
}
obj.f('Test')

const f = (m) => {
  console.log(m)
}
f('Test2')

const a = [
  // a is an array and the first element is a function that logs whatever it's passed
  m => console.log(m)
]
a[0]('Test array 0')

// timing dependency.
const x = {
  val: 2
};
const x1 = x => Object.assign({}, x, { val: x.val + 1});
const x2 = x => Object.assign({}, x, { val: x.val * 2});
console.log(x1(x2(x)).val); // 5
console.log(x2(x1(x)).val); // 6
// simpler
const z = 2;
const y1 = y => y + 1;
const y2 = y => y * 2;
console.log(y1(y2(z))); // 5
console.log(y2(y1(z))); // 6
console.log(y1(y2(z))); // 5

console.log("counter")
// counter
let arr = []
for (i=0;i<5;i++) {
  arr.push(i)
  console.log(arr[i])
}

// using Maps
var m = new Map()
m.set('a', 1)
m.set('b', 2)
console.log(m,m.size);
m.forEach((k, v) => console.log("key", k, "value", v))// key:1 value:a map:[object Map]
for([key,value] of m) 
  console.log(key + '=' + value)
// iterator
var iter = m.keys()
console.log(iter)
for (k of m) {
  console.log(iter.next())
}

// function that creates an object

const createUser = ({
  name = 'John Doe',
  favoriteColor = 'yellow'
}) => ({
  name,
  favoriteColor
})

const firstUser = createUser ({name:'Joe', favoriteColor:'Blue'})
const secondUser = createUser({name:'Duncan', favoriteColor:'red'})
console.log(firstUser, secondUser)
const users = []
users.push(firstUser)
users.push(secondUser)
console.log(users)

sc = require('./string-compare')
const string1 = 'asdghjkl;a'
console.log(sc.containsUnique(string1))