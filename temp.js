const CircularJSON = require('circular-json');
const crawler = require('./crawler');

let siteMap = crawler('http://sendlove.io', 0);

setTimeout(() => { // HACK
  console.log(CircularJSON.stringify(siteMap, null, 2));
  siteMap = crawler('http://josephbrown.herokuapp.com', 0);

  setTimeout(() => { // HACK
    console.log(CircularJSON.stringify(siteMap, null, 2));
  }, 1000);
}, 1000);

