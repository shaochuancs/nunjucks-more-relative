/**
 * Created by cshao on 8/5/16.
 */

"use strict";

module.exports = function(nunjucks) {
  if (nunjucks && nunjucks.Loader && nunjucks.Loader.prototype) {
    nunjucks.Loader.prototype.isRelative = function(filename) {
      return filename.substr(0,1) !== '/';
    };
  }
};