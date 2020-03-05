
// counter
let arr = []
for (i=0;i<15;i++) {
  arr.push(i)
  // console.log(arr[i])
}


/*
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
console.log(Object.values(firstUser))
if (Object.values(firstUser).includes('Joe')) 
  console.log('firstUser contains Joe')
else
  console.log('firstUser does not contain Joe')
const users = []
users.push(firstUser)
users.push(secondUser)
// console.log(users)
// for (user of users) {
//   console.log(user, Object.values(user))
// }

// is there an object in the array with a favoriteColor of red?

// const redUser = users.find(elem => Object.values(elem)[1] == 'red')
const redUsers = users.filter(elem => elem.favoriteColor == 'red') // better!
console.log(redUsers)

// sc = require('./string-compare')
// const string1 = 'asdghjkl;a'
// console.log(sc.containsUnique(string1))

*/