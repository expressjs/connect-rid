/**!
 * connect-rid - lib/connect-rid.js
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

var rid = require('rid');

module.exports = function (options) {
  options = options || {};
  var headerName = options.headerName || 'X-RID';
  return function requestid(req, res, next) {
    res.on('header', function () {
      res.setHeader(headerName, rid());
    });

    next();
  };
};
