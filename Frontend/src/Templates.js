
var fs = require('fs');
var ejs = require('ejs');


exports.WayResult = ejs.compile(fs.readFileSync('./Frontend/templates/WayResult.ejs', "utf8"));

