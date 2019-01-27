// build_docs.js
// Iterate dist/index.js classes,
// yank propTypes && defaultProps from each file,
var path = require('path');
var fs = require('fs');

[
  './dist/Cards',
  './dist/Components',
  './dist/Graphs',
  './dist/Helpers',
  './dist/Inputs',
].map(function(dir) {
  fromDir(dir, '.js', []);
});

function fromDir(startPath, filter, modules) {
  if (!fs.existsSync(startPath)){
    console.log("no dir ", startPath);
    return;
  }

  var files=fs.readdirSync(startPath);
  for(var i = 0; i < files.length; i++){
    var filename = path.join(startPath, files[i]);
    var stat = fs.lstatSync(filename);
    if (stat.isDirectory()){
      fromDir(filename, filter, modules);
    } else if (filename.indexOf(filter) >= 0) {
      checkFilepath(filename, modules);
    };
  };

};

function checkFilepath(filepath, modules) {
  const m = require("../" + filepath)
  console.log('-- checking: ', filepath);
}
