const CircularJSON = require('circular-json');
const crawler = require('./crawler');

let siteMap = crawler('http://sendlove.io', 0);

setTimeout(() => {
  console.log(CircularJSON.stringify(siteMap, null, 2));
  siteMap = crawler('http://sendlove.io/api', 1);
  setTimeout(() => {
    console.log(CircularJSON.stringify(siteMap, null, 2));
  }, 1500);
}, 1500);

