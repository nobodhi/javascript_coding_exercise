/* eslint-disable comma-dangle  */

const request = require('request');
const cheerio = require('cheerio');
const URL = require('url-parse');

class Page {
  constructor(href, parent) {
    this.parent = parent;
    this.href = href;
    this.links = [];
    this.assets = [];
  }
}
const visitedPages = [];

let pageList = [];
let host;

// private methods

function getPage(href, parent, next) {
  const links = [];
  const assets = [];
  request(href, (err, response, body) => {
    const page = new Page(href, parent);
    if (!err && response.statusCode === 200) {
      const $ = cheerio.load(body);

      const $links = $('a');
      $($links).each((i, link) => {
        let followLink = $(link).attr('href');
        if (followLink[0] === '/') {
          followLink = host + followLink;
        }
        const followUrl = new URL(followLink);
        if (followUrl.origin === host) {
          if (!links.includes(followLink)) links.push(followLink);
        }
      });

      const $img = $('IMG');
      $($img).each((i, img) => {
        const imgUrl = $(img).attr('src');
        if (imgUrl.includes(host)) {
          if (!assets.includes(imgUrl)) assets.push(imgUrl);
        }
      });

      const $scripts = $('script');
      $($scripts).each((s, script) => {
        const scriptUrl = $(script).attr('src');
        if (scriptUrl !== undefined) {
          if (scriptUrl.includes(host)) {
            if (!assets.includes(scriptUrl)) assets.push(scriptUrl);
          }
        }
      });

      page.links.push(links);
      page.assets.push(assets);
    }
    next(err, page);
  });
}

/**
 * @public
 * @function crawl recursive async
 * @param {string} href the next page to crawl
 * @param {string} parent the parent page
* @returns {pageList} an array of pages
 */
function crawl(href, depth, parent) {
  const url = new URL(href);

  if (parent === undefined) { // reset everything
    if (pageList.length < 1) {
      host = url.origin;
      console.log('host', host);
    } else {
      // this is a restart
      pageList = undefined;
    }
  }

  if (!visitedPages.includes(href) && href.includes(host)) {
    visitedPages.push(href);
    getPage(href, parent, (error, page) => {
      pageList.push(page);
      const links = page.links[0];

      if (links !== undefined) {
        links.forEach((link) => {
          if (depth > 0) {
            if (!visitedPages.includes(link.replace(/\/$/, ''))) {
              crawl(link, depth - 1, href);
            }
          }
        });
      }
    }); // getPage
  }
  return pageList;
} // if

module.exports = crawl;
