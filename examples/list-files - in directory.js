
'use strict';

var Sandcage = require('..');

var sandcage = new Sandcage('[YOUR SANDCAGE API KEY]');
var payload = {
  directory: '[relative directory]'
};

sandcage
  .listFiles(payload)
  .then(function(result) {
    console.log(result);
  });