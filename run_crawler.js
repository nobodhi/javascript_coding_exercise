const CircularJSON = require('circular-json');
const crawler = require('./crawler');
const async = require('async');

const foo = function runCrawler(siteToCrawl, callback){
  async.auto({
      crawl1: function(cb) {
        results = crawler(siteToCrawl, 4);
      },
  }, function(error, results) {
      if(error) { callback (error); 
      } else {
      callback(results); 
      }
  });
}

foo('http://josephbrown.herokuapp.com');


let siteMap = crawler('http://sendlove.io', 0);

setTimeout(() => {
  console.log(CircularJSON.stringify(siteMap, null, 2));
  siteMap = crawler('http://sendlove.io/api', 1);
  setTimeout(() => {
    console.log(CircularJSON.stringify(siteMap, null, 2));
  }, 1500);
}, 1500);

