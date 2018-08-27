const chai = require('chai');

const expect = chai.expect;
const crawler = require('../crawler');

describe('crawl josephbrown.herokuapp.com', () => {
  it('should request the josephbrown.herokuapp.com home page with depth = 0', (done) => {
    const url = 'https://josephbrown.herokuapp.com.com';
    setTimeout(() => {
      const result = crawler(url, 0); // depth of zero test just "crawls" one page
      expect(result[0].href).to.equal(url);
      expect(result).to.have.lengthOf(1);
    }, 5000);
    done();
  });
  it('should re-request the josephbrown.herokuapp.com home page with depth = 0', (done) => {
    const url = 'https://josephbrown.herokuapp.com.com';
    setTimeout(() => {
      const result = crawler(url, 0); // depth of zero test just "crawls" one page
      expect(result[0].href).to.equal(url);
      expect(result).to.have.lengthOf(1);
    }, 5000);
    done();
  });
});
