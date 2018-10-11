const chai = require('chai');

const expect = chai.expect;
const crawler = require('../crawler');

describe('crawl google.com', () => {
  it('should request the google.com home page with depth = 0', (done) => {
    const url = 'https://google.com';
    const result = crawler(url, 0);
    setTimeout(() => {
      expect(result[0].href).to.equal(url);
      expect(result).to.have.lengthOf(1);
      done();
    }, 1500); // HACK cannot exceed 2000ms
  });

  it('should RE-request the google.com home page with depth = 0', (done) => {
    const url = 'https://google.com';
    const result = crawler(url, 0);
    setTimeout(() => {
      expect(result[0].href).to.equal(url);
      expect(result).to.have.lengthOf(1);
      done();
    }, 1500); // HACK cannot exceed 2000ms
  });
});
