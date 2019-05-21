const CircularJSON = require('circular-json');
const crawler = require('./crawler');

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

