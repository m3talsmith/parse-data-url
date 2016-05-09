'use strict';

var validDataUrl = require('valid-data-url');

module.exports = function (s) {
  var parts;
  var parsed;

  if (!validDataUrl(s)) {
    return false;
  }

  parts = s.match(/^\s*data:([a-z]+\/[a-z0-9\-\+]+(;[a-z\-]+\=[a-z0-9\-]+)?)?(;base64)?,([a-z0-9\!\$\&\'\,\(\)\*\+\,\;\=\-\.\_\~\:\@\/\?\%\s]*?)\s*$/i);
  parsed = {};

  if (parts[1]) {
    parsed.mediaType = parts[1].toLowerCase();
  }

  if (parts[2]) {
    parsed.charset = parts[2].split('=')[1].toLowerCase();
  }

  parsed.base64 = !!parts[3];

  if (parts[4]) {
    parsed.data = parts[4];
  }

  return parsed;
};