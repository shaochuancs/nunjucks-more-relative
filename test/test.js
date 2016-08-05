/**
 * Created by cshao on 8/5/16.
 */

"use strict";

var assert = require('assert');
var moreRelative = require('../');

var nunjucksMock = {Loader:{prototype:{isRelative:null}}};

describe('Test module behaviour', function() {
  moreRelative(nunjucksMock);
  it('should return false when filename start with /', function() {
    assert.equal(false, nunjucksMock.Loader.prototype.isRelative('/testpath/subpath'));
  });

  it('should return true when filename start with ./', function() {
    assert.equal(true, nunjucksMock.Loader.prototype.isRelative('./testpath/subpath'));
  });

  it('should return true when filename start with ../', function() {
    assert.equal(true, nunjucksMock.Loader.prototype.isRelative('../testpath/subpath'));
  });

  it('should return true when filename start with plain word', function() {
    assert.equal(true, nunjucksMock.Loader.prototype.isRelative('testpath/subpath'));
  });
});