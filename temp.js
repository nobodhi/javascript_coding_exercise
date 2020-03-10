
// counter
let arr = []
for (i=0;i<15;i++) {
  arr.push(i)
  // console.log(arr[i])
}

// arrays

const arr1 = [1,2]
const arr2 = arr1.concat(3)
console.log (arr2)
for (val in arr2)
  console.log(val)
if (arr2.includes(3))
  console.log('arr2 includes 3')


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

const map = new Map()

map.set(1001, 'Joe')
map.set(1002, 'Bob')
console.log(map)
// key, value must be written as an array :( while for arrays we use for ... in
for ([k,v] of map) {
  console.log("key", k, "value", v)
}
console.log(map.values())
if (Array.from(map.values()).includes('Joe'))
  console.log('map includes Joe')


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
console.log(Object.values(firstUser))
if (Object.values(firstUser).includes('Joe')) 
  console.log('firstUser contains Joe')
else
  console.log('firstUser does not contain Joe')

// create an array of objects
const users = []
users.push(firstUser)
users.push(secondUser)
console.log(users)
for (user of users) {
  console.log(user, Object.values(user))
}

// is there an object in the array with a favoriteColor of red?

// const redUser = users.find(elem => Object.values(elem)[1] == 'red')
const redUsers = users.filter(elem => elem.favoriteColor == 'red') // better!
console.log(redUsers)

// sc = require('./string-compare')
// const string1 = 'asdghjkl;a'
// console.log(sc.containsUnique(string1))

const sortArray = [99,2,3,3,12,4,5];

bubbleSort = require('./bubble-sort');
const arrBubble = [...sortArray];
console.log("bubble sort\n", arrBubble);
bubbleSort(arrBubble);

selectionSort = require('./selection-sort');
const arrSelection = [...sortArray];
console.log("selection sort\n", arrSelection);
selectionSort(arrSelection);

const foo = ['bar']
// for (let i = 0, {length} = foo; i < length; i++) {
//   console.log(i)
// }
let {length} = foo;
console.log(length, {length})

const range1 = Array.from({length: 5}, (v, i) => i);
console.log(range1)
range1.forEach(v => console.log(v))