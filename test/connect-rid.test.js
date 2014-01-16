/**!
 * connect-rid - test/connect-rid.test.js
 *
 * Copyright(c) 2014
 * MIT Licensed
 *
 * Authors:
 *   fengmk2 <fengmk2@gmail.com> (http://fengmk2.github.com)
 */

"use strict";

/**
 * Module dependencies.
 */

var should = require('should');
var connect = require('connect');
var http = require('http');
var request = require('supertest');
var rid = require('../');

describe('connect-rid.test.js', function () {
  var app;
  before(function (done) {
    app = connect();
    app.use(rid());
    app.use(function (req, res) {
      res.end('hello rid');
    });
    app = http.createServer(app);
    app.listen(0, done);
  });

  it('should get X-RID header', function (done) {
    request(app)
    .get('/')
    .expect('X-RID', /^\d+\.\d+\.\d+\.\d+,\d+,\d+$/)
    .expect('hello rid')
    .expect(200, done);
  });
});
