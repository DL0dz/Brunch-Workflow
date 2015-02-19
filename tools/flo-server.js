'use strict';

var flo = require('fb-flo'),
    fs = require('fs'),
    path = require('path'),
    exec = require('child_process').exec;

var server = flo('../public/', { 
  port: 8888,
  dir: '../public/',
  verbose: false,
  useFilePolling: true,
  pollingInterval: 100,
  glob: ['../public/*.js', '../public/*.css', '../public/*.html', '../public/*.php']
}, resolver);

function resolver(filepath, callback) { 
  console.log(filepath + " has been updated");
  callback({
    resourceURL: '../public/' + filepath,
    reload: filepath.match(/\.(html|php)$/),
    contents: fs.readFileSync('../public/' + filepath)
  });
}

server.once('ready', function() {
  console.log('fb-flo server ready to rock!');
});

